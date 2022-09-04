// 171. Excel Sheet Column Number
/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(s) {
    const len = s.length - 1;
    let num = 0;
  
    for (let i = 0; i <= len; i++) {
      const pow = Math.pow(26, i);
      const n = s.charCodeAt(len - i) - 64;
  
      num += pow * n;
    }
  
    return num;
  };
  