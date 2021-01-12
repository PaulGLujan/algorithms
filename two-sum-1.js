var twoSum = function (nums, target) {
    const sorted = [...nums].sort((a, b) => a - b);

    let floor = 0;
    let ceil = sorted.length - 1;

    while (floor < ceil) {
        const sum = sorted[floor] + sorted[ceil];
        if (sum === target) {
            const floorI = nums.indexOf(sorted[floor]);
            const ceilI = nums.indexOf(sorted[ceil]);
            return [
                floorI,
                ceilI === floorI
                    ? nums.indexOf(sorted[ceil], floorI + 1)
                    : ceilI,
            ];
        } else sum > target ? ceil-- : floor++;
    }
};

let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log('#', twoSum(nums1, target1), '[0,1]', '\n');

nums1 = [3, 2, 4];
target1 = 6;
console.log('#', twoSum(nums1, target1), '[1,2]', '\n');

nums1 = [3, 3];
target1 = 6;
console.log('#', twoSum(nums1, target1), '[0,1]', '\n');

nums1 = [3, 2, 3];
target1 = 6;
console.log('#', twoSum(nums1, target1), '[0,2]', '\n');
