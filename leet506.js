/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let dic = {};
    nums.forEach((item, index) =>{
        dic[""+item] = index;
    });
    let re = [];
    nums.sort((left, right)=>{
        return right - left;
    });
    nums.forEach((item, index)=>{
        let newindex = dic[""+item];
        let v = index+1;
        if(index === 0) {
            v = "Gold Medal";
        }else if(index === 1) {
            v = "Silver Medal";
        }else if(index === 2) {
            v = "Bronze Medal";
        }
        re[newindex] = "" + v;
    });
    return re;
};

var fuck = findRelativeRanks([1,4,3,2,5,0]);
printArr(fuck)