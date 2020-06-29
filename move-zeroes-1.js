// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
var moveZeroes = function(nums) {
    if (!nums) return nums;
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            len--;
            i--;
        }
    }

    return nums;
};

const test1 = [0, 1, 0, 3, 12];
const test2 = [1, 3, 12, 0, 0];
const test3 = [1, 2, 3, 4, 5];

console.log(moveZeroes(test1));
console.log(moveZeroes(test2));
console.log(moveZeroes(test3));
console.log(moveZeroes(null));
console.log(moveZeroes([]));
