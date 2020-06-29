/*
121. Best Time to Buy and Sell Stock
Easy

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || !prices.length) return prices;
    let max = Number.MIN_VALUE;
    let maxDiff = null;

    for (let i = prices.length - 1; i >= 0; i--) {
        max = Math.max(max, prices[i]);
        const diff = max - prices[i];
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff;
};

const test = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(test));

const test2 = [7, 6, 4, 3, 1];
console.log(maxProfit(test2));
const test3 = [6, 5, 100, 1, 2];
console.log(maxProfit(test3));
console.log(maxProfit(null));
console.log(maxProfit([]));
