this.n = 123;
var obj = {n: 456};

function f() {
  console.log(this.n);
}


// f.call(obj);
// f.call(this);



a = [1,2,3];
console.log(Math.max.apply(null, a))