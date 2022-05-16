/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
	const compObj = {};

	for (let index = 0; index < nums.length; index++) {

        const element = nums[index]
        const comp = target - element

		if (compObj.hasOwnProperty(element)) {
			return [compObj[element], index];
		}
		compObj[comp] = index;
        
	}
};