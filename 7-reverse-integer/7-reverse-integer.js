/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const negative = x < 0 ? -1 : 1
    let output = 0
    x = Math.abs(x)
    while (x > 0) {
        const remainder = x % 10 
        output = output * 10 + remainder
        x = Math.floor(x / 10)
    }
    if (output > Math.pow(2,31)) return 0
    return output * negative
};