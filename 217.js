//217. Contains Duplicate  - HashTable

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] !== undefined) return true;
        else hash[nums[i]] = nums[i]
    }
    return false;
};

/**************************************************** Using Set *******************************************/
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length 
};