const reverseString = function(string) {
    const chars = string.split("");
    let ans = '';
    for (let i = 0; i < chars.length; i++){
        ans += chars[chars.length - 1 - i];
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
