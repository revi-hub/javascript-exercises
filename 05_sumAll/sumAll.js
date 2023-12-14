const sumAll = function(a, b) {
 if((typeof(a) != 'number') || (typeof(b) != 'number')) return 'ERROR';
 if(a < 0 || b < 0) return 'ERROR'
 let initValue, endValue;
 let sum = 0;
 if (a > b) {
    initValue = b;
    endValue = a;
}
 else {
    initValue = a;
    endValue = b;
 }
 for (let i = initValue; i <= endValue; i++) {
    sum += i;
 }
 return sum;
}
// Do not edit below this line
module.exports = sumAll;
