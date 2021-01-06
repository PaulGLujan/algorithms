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
    let arr = s.split('');

    let total = 0;
    while (arr.length > 0) {
        // console.log('arr', arr);
        // console.log('total', total);
        const i = arr[0];
        const j = arr[1];
        if (i === j) {
            let count = 2;
            let index = 2;
            while (i === arr[index]) {
                count++;
                index++;
            }
            total = total + numVal[i] * count;
            arr = arr.slice(index);
        } else {
            if (numVal[i] < numVal[j]) {
                total = total + numVal[j] - numVal[i];
                arr = arr.slice(2);
            } else {
                total = total + numVal[i];
                arr = arr.slice(1);
            }
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
console.log('58', test4);

const test5 = romanToInt('MCMXCIV');
console.log('1994', test5);

const test6 = romanToInt('DCXXI');
console.log('621', test6);
