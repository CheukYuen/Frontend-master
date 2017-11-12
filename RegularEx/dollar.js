let str = `Hi, leon. you rent bill is 12450000.0012312312 and 233.456 and 123123`;

let regex = /\d(?=(?:\d\d\d)+(?!\d))/g;

let result = str.replace(/(\d+)\.(\d+)/g, function ($0, $1, $2) {
  return '$' + $1.replace(regex, '$&,') + '.' + $2;
});

console.log(result);


