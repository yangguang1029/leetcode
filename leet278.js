/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let begin = 1;
        let end = n;
        while (begin < end) {
            let mid = Math.floor((end - begin) / 2) + begin;
            if (isBadVersion(mid)) {
                if (!isBadVersion(mid - 1)) {
                    return mid;
                }
                end = mid - 1;
            } else {
                if (isBadVersion(mid + 1)) {
                    return mid + 1;
                }
                begin = mid + 1;
            }
        }
        return 1;
    };
};