const numVal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

var romanToInt = function (s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const v0 = numVal[s[i]];
        const v1 = numVal[s[i + 1]] || 0;
        if (v0 >= v1) {
            total += v0;
        } else {
            total -= v0;
        }
    }
    return total;
};

const test1 = romanToInt('III');
console.log('3', test1, '\n');

const test2 = romanToInt('IV');
console.log('4', test2, '\n');

const test3 = romanToInt('IX');
console.log('9', test3, '\n');

const test4 = romanToInt('LVIII');
console.log('58', test4, '\n');

const test5 = romanToInt('MCMXCIV');
console.log('1994', test5, '\n');

const test6 = romanToInt('DCXXI');
console.log('621', test6, '\n');
