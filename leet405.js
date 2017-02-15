/**
 * @param {number} num
 * @return {string}
 */

var toHex = function(num) {
	if(num === 0) {
		return '0';
	}
	var hexs = ['0', '1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
	var re = '';
	while (num != 0) {
		var index = (num & 15);
		re = hexs[index] + re;
		num = num >>> 4;
	}

	return re;
}



var toHex1 = function(num) {
	if(num === 0) {
		return '0';
	}
	var hexs = ['0', '1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']


    var toHexArray = function(x) {	//把一个非负整数转成16进制数组，统一为32位
    	var arr = [];
    	for(var i = 0; i < 8; i++) {
    		arr[i] = 0;
    	}
    	var index = 7;
    	while(x > 0) {
    		arr[index] = x%16;
    		x = Math.floor(x/16)
    		index -= 1;
    	}
    	return arr;
    }

    var hexAdd = function(arr, arr1) {	//对一个数组形式的，加一个数，可以是负数
    	var sub = 0;
    	for(var i = 7; i >= 0; i--) {
    		var tmp = arr[i] + arr1[i] + sub;
    		if(tmp < 0) {
    			arr[i] = 16 + tmp;
    			sub = -1;
    		} else if(tmp > 15) {
    			sub = 1;
    			arr[i] =  tmp - 16;
    		}
    		else {
    			arr[i] = tmp;
    			sub = 0;
    		}
    	}
    }

    var arr ;
    if(num >= 0) {
    	arr = toHexArray(num);
    }else {
    	arr = toHexArray(-1 * num);
    	arr.forEach(function(e, i, a){
    		a[i] = -1 * e;
    	})
    	 hexAdd(arr, [15,15,15,15,15,15,15,15]);
    	 hexAdd(arr, [0,0,0,0,0,0,0,1]);
    }

    var str = '';
    for(var i = 0; i < 8; i++) {
    	var element = arr[i];
    	if(element > 0 || str.length > 0) {
    		str += hexs[element];
    	}
    }
    return str;

};


console.log(toHex(27));
console.log(toHex(-1));