/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0; i<nums.length; i++){
        let comp = target - nums[i];
        if(obj.hasOwnProperty(nums[i])){
            return [obj[nums[i]],i];  
        } 
            obj[comp] = i;
        // }
    }
};