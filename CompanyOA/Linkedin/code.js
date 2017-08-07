var Foo = function (a) {
  function bar() {
    return a;
  }


  this.baz = function () {
    return a
  }
};


Foo.prototype = {
  biz: function () {
    return a
  }
};


var f = new Foo(7);


// console.log(f.bar()); //return bar error
// console.log(f.baz()); // return 7
console.log(f.biz()); //return a undefined


//
// function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ param1) {
//   // 将 arguments 对象转为数组
//   var args = Array.prototype.slice.call(arguments);
//   // 取出构造函数
//   var constructor = args.shift();
//   // 创建一个空对象，继承构造函数的 prototype 属性
//   var context = Object.create(constructor.prototype);
//   // 执行构造函数
//   var result = constructor.apply(context, args);
//   // 如果返回结果是对象，就直接返回，则返回 context 对象
//   return (typeof result === 'object' && result != null) ? result : context;
// }

//
//
// var actor = _new(Person, '张三', 28);
//
//

var end = [
  {skill: 'css', user: 'Bill'},
  {skill: 'HTML', user: 'AAA'},
  {skill: 'css', user: 'CCC'},
  {skill: 'Python', user: 'SSS'},
  {skill: 'css', user: 'VVVV'},
  {skill: 'HTML', user: 'ALL'},
];

// function fc(arr) {
//   var map = {};
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].skill in map) {
//       map[arr[i].skill]['user'].push(arr[i]['user']);
//       map[arr[i].skill]['count'] += 1;
//
//     } else {
//       map[arr[i].skill] = {skill: arr[i].skill, user: [arr[i].user], count: 1};
//     }
//   }
//
//   for (var prop in map) {
//     result.push(map[prop])
//   }
//
//   return result;
// }


var endorsements = [
  {skill: 'javascript', user: 'Chad'},
  {skill: 'javascript', user: 'Bill'},
  {skill: 'javascript', user: 'Sue'},
  {skill: 'html', user: 'Sue HTML'},
  {skill: 'css', user: 'Sue CSS'},
  {skill: 'css', user: 'Bill CSS'}
];

function transformData(endo) {

  var hash = {};

  endo.forEach(function (el) {
    if (hash[el.skill]) {
      hash[el.skill].push(el.user)
    } else {
      hash[el.skill] = [];
      hash[el.skill].push(el.user);
    }

  });

  var res = Object.keys(hash).map(function (key) {
    var obj = {};
    obj['skill'] = key;
    obj['user'] = hash[key];
    obj['count'] = hash[key].length;
    return obj;

  });

  console.log(res);
}

var nestArray = [1, 2, [3, 4, [5, [6]], 7], 8, 9];

function flat(arr) {
  var res = [];
  helper(arr, res);
  console.log(res);
}


function helper(arr, res) {
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.concat(helper(el, res))
    } else {
      res.push(el)
    }
  });
  return res
}

// flat(nestArray);


// leetcode 20 Valid Parentheses，中间有个follow up，我一开始的程序是（、【、{逐一判断，大哥说我要是有500个不同的parentheses的表达怎么办？直接dictionary


var string = "()";

var isValid1 = function (s) {
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var ch = s.charAt(i);
    if (ch == '{' || ch == '[' || ch == '(') {
      stack.push(ch)
    } else {
      if (stack.length == 0) {
        return false;
      }
      var temp = stack.pop();
      if (ch == '}' && temp != '{' || ch == ']' && temp != '[' || ch == ')' && temp != '(') {
        return false;
      }
    }
  }
  return stack.length == 0
};


// 3）given a tree structrue {'s1':'([])','s2:{s3:'{[(]}'}','s4':''}, 判断这个given tree是否是valid tree（即里面的元素都是valid parentheses）


var isValid = function(s) {
  var stack = [];
  var hash = {'{': '}', '[' : ']', '(' : ')'}
  for (var i = 0; i < s.length; i++){
    var ch = s.charAt(i)
    if (Object.keys(hash).indexOf(ch) != -1){
      stack.push(ch)
    } else {
      if (stack.length == 0) {
        return false;
      }
      console.log(temp)
      var temp = stack.pop(); // 'c'
      if (ch != hash[temp]) {
        return false;
      }
    }
  }
  return stack.length == 0
};

// isValid(string);

var hash = {'{': '}', '[' : ']', '(' : ')'};
console.log('(' in Object.keys(hash));
