//66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    
    let i = digits.length-1             // 2 
    
    if(digits[digits.length-1] === 9) {
        while(digits[i] === 9 && i >= 0 ){

            digits[i] = 0;
            i--;            
        }
        if(digits[0] === 0) digits.unshift(1);
        else digits[i] = digits[i] +1;
    } else  
        digits[digits.length-1] = digits[digits.length-1]+1;
    
    return digits;
};