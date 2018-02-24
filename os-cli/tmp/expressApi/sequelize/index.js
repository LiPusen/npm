const Sequelize = require('sequelize');
const conf = require('../config');
const until = require('os-tool');
const Op = Sequelize.Op;

const db = new Sequelize(conf.mysql.card.db, conf.mysql.card.user, conf.mysql.card.password, {
    'host': conf.mysql.card.host,
    'port': conf.mysql.card.port,
    'dialect': 'mysql',
    'pool': {
        'max': '5',
        'min': '0',
        'acquire': '30000',
        'idle': '10000'
    },
    'define': {
        'freezeTableName': true,
        'createdAt': 'create_time',
        'updatedAt': 'update_time'
    },
    'timezone': '+08:00'
})

db.authenticate().then(() => {
    const Project = db.define('project', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        op: Sequelize.STRING
    })
    
    const Task = db.define('task', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        deadline: Sequelize.DATE,
        os: Sequelize.STRING
    })
}).catch(err => {
    console.error('卡券库连接失败：', err);
})