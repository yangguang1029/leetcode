/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length;
    let index = 0;
    let count = 0;
    while(index < len) {
        while(index < len && flowerbed[index] === 1) {
            index += 1;
        }
        //find continuous 0 count
        if(index === len) {
            break;
        }
        let zc = 0;
        while(index < len && flowerbed[index] === 0) {
            index += 1;
            zc += 1;
        }
        if(index === zc || index === len){
            count += Math.floor((zc)/2);
        }else {
            count += Math.floor((zc-1)/2);
        }
        if(count >= n) {
            break;
        }
    }
    return count >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))

console.log(canPlaceFlowers([1,0,0,0,1], 2))