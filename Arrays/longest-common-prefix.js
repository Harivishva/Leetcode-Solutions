// Problem: Longest Common Prefix
// Difficulty: Easy
// Approach: Prefix Shrinking - O(n * m) time, O(1) extra space

var longestCommonPrefix = function(strs) {
    let prefix=strs[0];
    for(let i=0;i<strs.length;i++){
        while(!strs[i].startsWith(prefix)){
            prefix=prefix.slice(0,-1);
        }
    }
    return prefix;
};
