// 169. Majority of elements

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    
    let half = Math.round(nums.length/2);    
    if(nums.length === 1) return nums[0];
    
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    
    for(let key in hash) {
        if(hash[key] >= half) {
            return key;
        } 
    }
    
};
