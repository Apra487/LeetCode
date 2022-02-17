/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [ ];
    let pair = {')' : '(', '}' : '{', ']' : '['}
    let open = ['(', '{', '['];
    let close = [')', '}', ']'];
    
    if (s.length == 0) return true;

    for (let item of s) {
        if (open.includes(item)) stack.push(item);
        else if (close.includes(item)) {
            let top = stack.pop();
            if (top !== pair[item]) return false;
        }
    }
    
    if (stack.length) return false;
    return true;
    
    
    
    
};