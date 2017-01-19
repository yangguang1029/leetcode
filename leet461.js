var hammingDistance = function(x, y) {
    var index = 0;
    var c = 0;
    while(index < 31) {
    	var tmp = 1 << index;
    	if((x & tmp) !== (y & tmp)) {
    		c += 1;
    	}
    	index += 1;
    }
    
    return c;
};

console.log(hammingDistance(1,4));