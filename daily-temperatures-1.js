/*
739. Daily Temperatures
Medium

Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    if (!T || T.length === 0) return T;
    const output = new Array(T.length).fill(0);
    const stack = [];

    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            const diff = i - stack[stack.length - 1];
            output[stack[stack.length - 1]] = diff;
            stack.pop();
        }
        stack.push(i);
    }
    return output;
};

const test = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(test));
const test1 = [1, 2, 3, 4];
console.log(dailyTemperatures(test1));
const test2 = [4, 3, 2, 1];
console.log(dailyTemperatures(test2));
console.log(dailyTemperatures(null));
