// 448. Find All Numbers Disappeared in an Array
/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

var findDisappearedNumbers = function(nums) {
    if (!nums) return nums;
    const output = new Set();
    for (let i = 1; i < nums.length + 1; i++) {
        output.add(i);
    }
    for (let i = 0; i < nums.length + 1; i++) {
        const val = nums[i];
        if (output.has(val)) output.delete(val);
    }
    return [...output];
};

const test = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(JSON.stringify(findDisappearedNumbers(test)));
console.log(JSON.stringify(findDisappearedNumbers(null)));
