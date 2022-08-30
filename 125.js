//125. Valid Palindrome using rexEx with replace
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  
    let changedS = s.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');    //everything that is -not letters and numbers
    let reversedS = changedS.split('').reverse().join('');
       
    return changedS === reversedS;
};

// or typing out all of the symbols explicitly: (this one is slower)

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let changedS = s.toLowerCase().replace(/[."',\/#!?$%\^&\*<>;\s:@{}\[\]=\-_\|/`~()]/g, ''); 
    let reversedS = changedS.split('').reverse().join('');
    
    return changedS === reversedS;
};