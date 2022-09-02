// Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i]
    }
    nums1.sort((a,b) => a - b);
};

/*************************************** Three Pointers (Start From the End);    O(1) space complexity and O(n+m) time */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;
    
    for(let p = n+m-1; p >= 0; p--) {
        if(p2 < 0) break;
        
        if(nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1--]
        } else {
            nums1[p] = nums2[p2--]
        }
    }
};

