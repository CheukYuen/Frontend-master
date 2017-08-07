var t = 3;

var A = function () {
  this.t = 1;
};

A.prototype.say = function () {

  console.log(this.t)
};


var b = {
  t: 2,
  say: function () {
    console.log('bb')
  }
};


var a = new A();

a.say.call(b);

console.log(a)