var one = {
  name: 'Leon',
  say: function (greet) {
    return greet + ',' + this.name
  }
};


var two = {name: 'Chris'};


var say = one.say.bind(one);

console.log(say('hoho'));


var tSay = one.say.bind(two);

console.log(tSay('lolo'));