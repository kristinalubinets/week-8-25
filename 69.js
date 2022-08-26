//69. Sqrt(x) 

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
    if(x < 2) return x;
    
    let left = 2;
    let right = Math.floor(x / 2);
    
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        if(middle*middle > x) {
            right = middle -1;
        } else if (middle*middle < x) {
            left = middle + 1;
        } else return middle;
    }
    return right;
};