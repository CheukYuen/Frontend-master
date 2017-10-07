//比如输入: [1,13,24,11,11,14,1,2] 
// 输出: [1,13,24,11,14,2]
// 需要去掉重复的11 和 1 这两个元素。

let removeRepeat = function(arr) {
	let hashmap = {};
	let result = [];
	for (var i = 0; i < arr.length; i++) {
		if (hashmap[arr[i]] !== true) {
			result.push(arr[i]);
			hashmap[arr[i]] = true;
		};
	};

	return result

}



console.log(removeRepeat([1,13,24,11,11,14,1,2] ));

