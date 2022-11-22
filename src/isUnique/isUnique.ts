const isUnique = (str: string): boolean => {
    const chars = str.split('');
    const charMap: CharMap = {};

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (charMap[char]) {
            return false;
        }
        charMap[char] = 1;
    }
    return true;
};

interface CharMap {
    [key: string]: number;
}

export default isUnique;
