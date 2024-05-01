const palindromes = function (str) {
    let arr = str.toLowerCase().split('').filter( ( value ) => {
        switch (value) {
            case '.':
                return false;
                break;
            case ',':
                return false;
                break;   
            case '!':
                return false;
                break;   
            case '?':
                return false;
                break;
            case ' ':
                return false;
                break;        
            default:
                return true;
                break;
        }
    })
    let strFiltered = arr.join('')
    let strFilteredReverse = arr.reverse().join('')
    console.log(strFiltered)
    return strFiltered == strFilteredReverse;
};

// Do not edit below this line
module.exports = palindromes;
