//14. Longest Common Prefix 

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    if(strs.length === 0) return "";
    
    let prefix = "";
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) return prefix;
        }
        prefix += strs[0][i]
    }
    
    return prefix;
};  
// iterating over the first string in array (since we're looking for the same prefix in all of the strings)
// iterate over the rest of the array of strings
