const isPermutation = (str1, str2) => {
    const str1Arr = str1.split('');
    const charMap = mapArrToObj(str1Arr);

    const str2Arr = str2.split('');

    str2Arr.forEach((char) => {
        charMap[char] = -1;
    });

    for (char in charMap) {
        if (charMap[char] != 0) {
            return false;
        }
    }

    return true;
};

const mapArrToObj = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Input to mapArrToObj must be array!');
    }

    return arr.reduce((charMap, char) => {
        upsertKeyCount(charMap, char);
        return charMap;
    }, {});
};

const upsertKeyCount = (obj, key) => {
    if (obj[key]) {
        obj[key] += 1;
    } else {
        obj[key] = 1;
    }
};

const result = isPermutation('wallwriters');
