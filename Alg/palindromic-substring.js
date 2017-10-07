function isPalin(str) {
  var star = 0, end = str.length - 1;
  while (start < end) {
    if (str[start] != str[end]) {
      return false
    }

    start++;
    end--;
  }

  return true

}


function isPalin2(str) {
  return str == str.split('').reverse().join('')

}


var str1 = 'abbac';
console.log(isPalin2(str1));
