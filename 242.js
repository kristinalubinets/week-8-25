// 242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hashS = {};
    let hashT = {};
    
    for(let i = 0; i < s.length; i++) {
        if(hashS[s[i]] === undefined) {
            hashS[s[i]] = 1;
        } else {
            hashS[s[i]]++;
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        if(hashT[t[i]] === undefined) {
            hashT[t[i]] = 1;
        } else {
            hashT[t[i]]++;
        }
    }

    if (s.length !== t.length) return false;
  
    for(let key in hashS) {
        console.log(hashS[key], hashT[key])
        if(hashS[key] !== hashT[key]) return false;
    }
    return true;
};

/*********************************************** using methods ********************************************/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
};