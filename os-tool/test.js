const tool = require('./index.js');
console.log(tool.uuid())
console.log(tool.uuid(6, 18))
console.log(tool.getStr(123))
console.log(tool.getStr({name: "Jack", age: 32}))
console.log(tool.getStr("[9,1,1]"))
console.log(tool.getParse({name: "Jack", age: 32}))
console.log(tool.getParse([1,3,6]))
console.log(tool.getParse('abc'))