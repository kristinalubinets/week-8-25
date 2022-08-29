//387. First Unique Character in a String
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const hash = {};      
    for(let i = 0; i < s.length; i++) {
            if(hash[s[i]] === undefined) {
                hash[s[i]] = 1;
            } else {
                hash[s[i]]++;
            }   
    }    
    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]] === 1) return i
    } 
    return -1
};
