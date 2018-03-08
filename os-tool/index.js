// 声明数据类型集
const type = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"];

const ck = {};

// 检测数据类型
for(var b = 0; b < type.length; b++) {
	(function(k) {
		ck[type[k]] = function(obj) {
			return Object.prototype.toString.call(obj) === '[object ' + type[k] + ']';
		};
	})(b);
}
// 判断一个对象是否为空
ck.Empty = function(a) {
    if(ck.Object(a)) {
        return JSON.stringify(a) == '{}';
    } else if(ck.Array(a)) {
        return !Boolean(a.length);
    } else {
        return !Boolean(a);
    }
}
// 将对象转换成字符串
const getStr = function(val) {
	let returnVal = (ck.Object(val) || ck.Array(val)) ? JSON.stringify(val) : val;
	return returnVal;
}
// 将字符串格式化
const getParse = function(val) {
	try{
		return JSON.parse(val);
	}catch(e){
		//TODO handle the exception
		return val;
	}
}
// 生成UUID
const uuid = function(l, radix) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uid = [], i;
    radix = radix || chars.length;
 
    if (l) {
      // 随机生成任意字符组合uuid，重复度较高
      for (i = 0; i < l; i++) uid[i] = chars[0 | Math.random()*radix];
    } else {
      let r;
      // 转换编码格式
      uid[8] = uid[13] = uid[18] = uid[23] = '-';
      uid[14] = '8';
      // 替换随机值.  At i==19 set the high bits of clock sequence
      for (i = 0; i < 36; i++) {
        if (!uid[i]) {
          r = 0 | Math.random()*16;
          uid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uid.join('');
}
// 获取浏览器地址所携带参数
const getParams = function(ur) {
	ur = ur || window.location.href;
    if(ur.indexOf('#') != -1) {
        ur = ur.split('#')[1];
    }

    let params = '';
    if(ur.indexOf('?') != -1) {
        params = ur.substr(ur.indexOf('?') + 1);
    }

    const obj = {};
    if(params) {
        let arr = [];
        if(params.indexOf('&') == -1) {
            arr = [params];
        } else {
            arr = params.split('&');
        }
        for(let i = 0; i < arr.length; i++) {
            const s = arr[i].split('=');
            obj[s[0]] = decodeURIComponent(s[1]);
        }
    }
    return obj;
}
// 格式化错误信息
const ormErr = function(er) {
	const errors = {};
    let a, e;

    if(er && er.length) for(a = 0; a < er.length; a++) {
      e = er[a];

      errors[e.property] = errors[e.property] || [];
      errors[e.property].push(e.msg);
    };
    
    return errors;
}

const qrcode = require('./qrcode');

module.exports = {
    uuid,
    getStr,
    getParse, 
    ck,
    ormErr,
    qrcode
}
