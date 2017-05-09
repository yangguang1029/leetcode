/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let dic = {};
    let kc = 0;
    candies.forEach((item)=>{
        let k = ""+item;
        if(!dic[k]) {
            dic[k] = true;
            kc += 1;
        }
    });

    let len = candies.length;
    return kc > len/2 ? len/2 : kc;
};