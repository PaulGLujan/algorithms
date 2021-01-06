const isPalindrome = (num) => {
    if (num < 0) return false;
    const numStr = num.toString();

    let i = 0;
    let j = numStr.length - 1;
    while (i <= j) {
        if (numStr[i] != numStr[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};

const test1 = isPalindrome(121);
console.log("true", test1);

const test2 = isPalindrome(-121);
console.log("false", test2);

const test3 = isPalindrome(10);
console.log("false", test3);

const test4 = isPalindrome(-101);
console.log("false", test4);

const test5 = isPalindrome(1221);
console.log("true", test5);
