let object1 = {
  apple: 0,
  banana: {weight: 40, from: 'China'},
  orange: 10
};


let object2 = {
  waterMelon: 20,
  banana: {weight: 10, from: 'US'},
  orange: 40
};

let object3 = {
  pineApple: 80,
  peer: 37,
};



function isObject(obj) {
  return typeof obj === "object"
}


function extend() {
  let target = arguments[0] || {};
  for (let i = 1; i < arguments.length; i++)
    for (let prop in arguments[i]) {
      if (arguments[i].hasOwnProperty(prop)) {
        if (Array.isArray(arguments[i][prop])) {
          target[prop] = extend([], arguments[i][prop])
        } else if (isObject(arguments[i][prop])) {
          target[prop] = extend({}, arguments[i][prop])
        } else {
          target[prop] = arguments[i][prop]
        }

      }
    }
  return target
}
// console.log(extend({}, obj1, obj2, obj3));

// http://www.jianshu.com/p/04b1d88dabf2
// http://www.cnblogs.com/jq-melody/p/4499333.html