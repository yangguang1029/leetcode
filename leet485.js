var findMaxConsecutiveOnes = function(nums) {
    var len = nums.length;
    if(len === 0) {
    	return 0;
    }
    var count = 0;
    var start = 0;
    var index = start;

    while(index < len) {
    	//find start
    	while(index < len && nums[index] !== 1) {
    		index += 1;
    	}
    	if(index >= len) {
    		break;
    	} 
    	start = index;
    	index = start + 1;
    	
    	while(index < len && nums[index] === 1) {
    		index += 1;
    	}
    	var sub = index - start;
    	if(sub > count) {
    		count = sub;
    	}
    }

    return count;

};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,1,0,0,0,0,1,1,1]))