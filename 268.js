// 268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    nums.sort((a,b) => a - b);
    
    if(nums[0] !== 0) return 0;
    
    for(let i = 0; i < nums.length; i++) {
  
        if(nums[i] !== i ) {
            return i;
        } else if (nums[i] === i && nums.length !== nums[nums.length-1]) {
            return nums.length;
        }
    }
};
// n log n complexity time because of sorting method;
// the array is sorted in place(returns reference to the array), so O(1) space time


/****************************************************************************************** Using BITWISE XOR operator!: ***********************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    //assume that the missing number is the last number - array length 
    let missing = nums.length;
    //iterate through the array (position does not matter) and compare indexes with its values
    for(let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i]
    }
    return missing;
};   
//Time complexity : O(n)
// Space O(1)

/********************************************* using sums of both indexes and values  ****************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let sumIndex = 0;
    let sumValues = 0;
     
    for(let i = 0; i < nums.length; i++){
        sumIndex += i+1;
        sumValues += nums[i];
    }
    return sumIndex - sumValues;
};   