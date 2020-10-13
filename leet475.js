/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
	// houses.sort((l,r)=>l-r)
	// heaters.sort((l,r)=>l-r)
	let i = 0
	let diss = []
	let hlen = houses.length
	for(let j = 0; j < heaters.length; j++) {
		let heat = heaters[j]
		let from = i
		while(i < hlen && houses[i] <= heat) {
			i += 1
		}
		let dis = 0
		if(i === from) {
			dis = houses[from] - heat
		} else if(i === hlen) {
			dis = heat - houses[from]
		}else {
			dis = Math.max(heat - houses[from], houses[i] - heat)
		}
		diss.push(dis)
	}
	diss.sort((l,r) => l - r)
	let min = diss[0]
	// 还没遍历完房子，需要针对最后一个暖气做处理
	if(i < hlen) {
		return Math.max(min, houses[hlen-1] - heaters[heaters.length - 1])
	}
	
	return min
};

// console.log(findRadius([1,2,3,4], [1,4]))
// 
console.log(findRadius([1,2,3,5,15], [2,30]))

// console.log(findRadius([1], [1,2,3,4]))

// console.log(findRadius([1,1,1,1,1,1,999,999,999,999,999], [499,500,501]))


