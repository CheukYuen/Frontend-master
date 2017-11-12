let Compile = function (el, vm) {
  this.$el = el;
  this.$vm = vm;
};


Compile.prototype = {
  node2Fragment: function () {
    let fragment = document.createDocumentFragment();
    let child;
    while (child = this.$el.firstChild) {
      fragment.appendChild(child);
    }
    return fragment
  },

  compileElement: function () {
    let arr = [1, 2, 3];
    let self = this;
    // console.log(this);
    arr.forEach((e) => {
      console.log(this);
    })
  }
};
