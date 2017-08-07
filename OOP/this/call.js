var obj = {};

console.log(obj.hasOwnProperty('toString'));

obj.hasOwnProperty = function () {
  return true;
};

console.log(obj);

console.log(obj.hasOwnProperty());



var o = Object.prototype.hasOwnProperty.call(obj, 'toString');

console.log(o)
