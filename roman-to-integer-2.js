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
    let i = 0;

    while (i < s.length) {
        const first = numVal[s[i]];
        const second = numVal[s[i + 1]];
        if (!second || first >= second) {
            total += first;
            i++;
        } else {
            total += second - first;
            i += 2;
        }
    }
    return total;
};

const test1 = romanToInt('III');
console.log('3', test1);

const test2 = romanToInt('IV');
console.log('4', test2);

const test3 = romanToInt('IX');
console.log('9', test3);

const test4 = romanToInt('LVIII');
console.log('58', test4, '\n\n');

const test5 = romanToInt('MCMXCIV');
console.log('1994', test5, '\n\n');

const test6 = romanToInt('DCXXI');
console.log('621', test6);
