let data = {name: 'kingend'};
observe(data);
data.name = 'dmq'; // log something


function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    configurable: false,
    enumerable: true,
    get: function () {
      return val
    },
    set: function (newVal) {
      console.log(`${val} ==> ${newVal}`);
      val = newVal;
    }
  });
}


function observe(obj) {
  if (!obj || typeof obj !== 'object') {
    return
  }
  Object.keys(obj).forEach(function (key) {
    defineReactive(obj, key, obj[key])
  })
}

function Dep() {
  this.subs = []
}


Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update();
    })
  }
};


Dep.target = null;