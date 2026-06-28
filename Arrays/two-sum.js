// Problem: Two Sum
// Difficulty: Easy
// Approach: HashMap - O(n) time O(n) space
// Runtime: 1ms - Beats 87%

var twoSum = function(nums, target) {
    let map = {};
    
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
};
