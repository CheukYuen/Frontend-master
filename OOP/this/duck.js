/**
 * Created by zlin on 3/8/17.
 */

var notDuck = Object.create({quack: true});

var duck1 = Object.create(null);

duck1.quack = true;
var duck = {quack: true};


function duckCount() {
  // SOLUTION GOES HERE
  return Array.prototype.slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj,'quack')
  }).length;

}



console.log(duckCount(notDuck, duck1));











