

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b)
    if (merged.length % 2 === 0) {

        return ((merged[merged.length / 2]) + (merged[(merged.length / 2) - 1])) / 2;
    } else {
        return merged[(merged.length - 1) / 2];
    }

};