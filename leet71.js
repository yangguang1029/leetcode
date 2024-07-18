/**
 * @param {string} path
 * @return {string}
 */

/*

给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。

请注意，返回的 规范路径 必须遵循下述格式：

始终以斜杠 '/' 开头。
两个目录名之间必须只有一个斜杠 '/' 。
最后一个目录名（如果存在）不能 以 '/' 结尾。
此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
返回简化后得到的 规范路径 。

1 <= path.length <= 3000
path 由英文字母，数字，'.'，'/' 或 '_' 组成。
path 是一个有效的 Unix 风格绝对路径。

*/

// 实际上还是应该先直接分割成数组，然后再遍历会方便很多。我故意用字符串截取，实际上吃力不讨好，为了切割路径名搞的特别费劲


var simplifyPath = function(path) {
    let start = 1; // 由于是有效路径，因此第一个一定是/，就从第一个开始
    let arr = []
    while(start < path.length) {
        let end = start + 1
        while(end < path.length && path.charAt(end) !== '/') {
            end += 1
        }
        const str = path.slice(start, end)
        while(end < path.length && path.charAt(end) === '/') {
            end += 1
        }
        start = end;
        if(str === '' || str === '/' || str === '.') {
            continue
        }
        if(str === '..') {
            if(arr.length > 0) {
                arr.pop()
            }
            continue
        }
        arr.push(str)
    }
    return '/' + arr.join('/')

};

console.log(simplifyPath("/../"));