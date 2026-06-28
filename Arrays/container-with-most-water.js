// Problem: Container With Most Water
// Difficulty: Medium
// Approach: Two Pointers - O(n) time O(1) space

var maxArea = function(height) {
    let left=0;
    let right=(height.length)-1;
    let result=0;
    while(left<right){
        let area=Math.min(height[left],height[right])*(right-left);
        result=Math.max(result,area);
        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return result;
};
