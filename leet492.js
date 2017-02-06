/**
 * @param {number} area
 * @return {number[]}	//L,W
 */
var constructRectangle = function(area) {	
    var l = Math.ceil(Math.sqrt(area));
    if(l * l === area) {
    	return [l,l];
    }
    while(l < area && area % l !== 0) {
    	l += 1;
    }
    return [l, area/l];
};