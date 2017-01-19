var findComplement = function(num) {
    var re = 0;
    var index = 0;
    while(num > 1) {
    	var tmp = num % 2;
    	if(tmp === 0) {
    		re += (1 << index);
    		
    	}
    	index += 1;
    	num = Math.floor(num / 2);
    }

    return re;
};
console.log(findComplement(2));
console.log(findComplement(5));
console.log(findComplement(1));