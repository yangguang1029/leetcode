/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
	heaters.sort(function(l,r){
		return l - r;
	})

    var re = -1;
    var heaterLen = heaters.length;
   	for(var i = 0, len = houses.length; i < len; i++) {
   		var j = 0;
   		var house = houses[i];
   		while(j < heaterLen && heaters[j] < ) {

   		}
   	}

    return re;
};

console.log(findRadius([1,2,3,4], [1,4]))
// 
console.log(findRadius([1,2,3,4], [1]))

console.log(findRadius([1], [1,2,3,4]))

console.log(findRadius([1,1,1,1,1,1,999,999,999,999,999], [499,500,501]))


