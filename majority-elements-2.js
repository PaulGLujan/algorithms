// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.
var majorityElement = function(nums) {
    if (!nums || nums.length === 0) return nums;
    nums.sort();
    const center =
        nums.length % 2 === 1 ? nums.length / 2 - 0.5 : nums.length / 2;
    return nums[center];
};

const test = [3, 2, 3];
const test2 = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(test));
console.log(majorityElement(test2));
console.log(majorityElement(null));
