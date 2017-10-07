// 给出一段英文连续的英文字符窜，找出重复出现次数最多的字母
// 输入 ： afjghdfraaaasdenas 
// 输出 ： a

var countTotal = function(str){
  let charObj = {};
  for(let i=0;i<str.length;i++) {

    if(!charObj[str[i]]) {
      charObj[str[i]] = 1;
    }else{
      charObj[str[i]] += 1;
    }
  }

	let max = 0;
	let result;
	for(var s in charObj){
		if (max < charObj[s]){
			max = charObj[s];
			result = s

		}

	}

	return result

}






console.log(countTotal('afjghdfraaaasdenas'));


var ss = 'asd';
console.log(ss[0])