/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var index1 = len1 - 1;
    var index2 = len2 - 1;
    var arr = [];
    var add = 0;
    while(index1 >= 0 && index2 >= 0) {
    	var n1 = parseInt(num1[index1]);
    	var n2 = parseInt(num2[index2]);
    	var n = n1 + n2 + add;
    	if(n >= 10) {
    		add = 1;
    		arr.push(n%10);
    	}else{
    		add = 0;
    		arr.push(n);
    	}
    	index1 -= 1;
    	index2 -= 1;
    }
    var index;
    var nums;
    if(index1 < 0) {
    	index = index2;
    	nums = num2;
    }else{
    	index = index1;
    	nums = num1;
    }
    while(index >= 0) {
    	var n = parseInt(nums[index]) + add;
    	if(n >= 10) {
    		add = 1;
    		arr.push(n%10);
    	}else{
    		add = 0;
    		arr.push(n);
    	}
    	index -= 1;
    }
    if(add > 0) {
    	arr.push(add);
    }
    return arr.reverse().join("");
};

console.log(addStrings("123", "456789"));