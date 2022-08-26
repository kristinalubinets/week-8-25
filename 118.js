//118. Pascal's Triangle -- intro to Dynamic Programming
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let outer = [];

    if(numRows === 0) return [];
    
    for(let i = 0; i < numRows; i++) {      
        
        let inner = [];        
        for(let j = 0; j <= i; j++) {
            if (j === 0 || j === i){
                inner.push(1);
            } else 
                inner.push(outer[i-1][j-1] + outer[i-1][j])
        }  
        outer.push(inner)
    }
    return outer
};
