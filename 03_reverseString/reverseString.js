const reverseString = function(string) {
    let stringArray = string.split('')
    let stringLen = string.length
    let buffer 
    for(let i = 0, j = stringLen - 1; i <= Math.floor((stringLen - 1) / 2); i++, j--){
        buffer = stringArray[i]
        stringArray[i] = stringArray[j]
        stringArray[j] = buffer
    }
    return stringArray.join('')
};
module.exports = reverseString; 