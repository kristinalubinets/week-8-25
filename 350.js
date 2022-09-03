//350. Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//given two arrays nums1 nums2
//return array of their intersection 

var intersect = function(nums1, nums2) {
    let hashMap = {};
    let result = [];
    
    for(let i = 0; i < nums1.length; i++) {
        if(!hashMap[nums1[i]]) {
            hashMap[nums1[i]] = 1;
        } else {
            hashMap[nums1[i]]++;
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        if(hashMap[nums2[i]] && hashMap[nums2[i]] > 0) {
            result.push(nums2[i]);
            hashMap[nums2[i]]--;
        }
    }
    return result;
};

//Time Complexity: O(n + m), where n and m are the lengths of the arrays. 
//Space Complexity: O(n, m) We use hash map to store numbers (and their counts) from the smaller array.