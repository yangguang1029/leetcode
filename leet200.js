/**
 * @param {character[][]} grid
 * @return {number}
 */


// 看过解答，涉及到图的问题，都可以尝试用深度遍历DFS去做
// 图的深度遍历，和树类似，只是树只有左右两个节点，而图则有上下左右 4 个节点，并且图要考虑用标记记录已经遍历过的节点

// 具体到本题，遍历每个节点，并且 1 节点遍历后改为 2 避免重复遍历，<!--如果有一个节点自身为 1 ，他的四周只有 0 和 2，则表示是一个岛屿-->

// 这里在完成时出了 2 个错
// 首先是在 node 为 0 时没有返回，导致了无限循环，这里不返回，是为了要遍历完整个图，所以主函数里只掉用了一次 traverse，但实际上需要调用 n^2 次
// 还是思路上没有想明白
// 其次是 count 的时机不对，把 count 写到了 traverse 里，实际上在两次 for 里，每次 traverse 都正好走遍了一个岛。想象一下画面，很容易想到

var numIslands = function (grid) {

    let count = 0;
    const rowcount = grid.length;
    const colcount = grid[0].length;


    function traverse(row, col) {
        if (row < 0 || row >= rowcount || col < 0 || col >= colcount) {
            return;
        }
        let node = grid[row][col]
        if (node === '2' || node === '0') {
            return;
        }
        grid[row][col] = '2'
        traverse(row + 1, col)
        traverse(row - 1, col)
        traverse(row, col + 1)
        traverse(row, col - 1)
    }

    for(let i = 0; i < rowcount; i++) {
        for(let j = 0; j < colcount; j++) {
            if(grid[i][j] === '1') {
                count += 1
            }
            traverse(i, j)
        }
    }
    return count;

}




// 二维动态规划
var numIslands1 = function (grid) {
    const rowcount = grid.length;
    const colcount = grid[0].length
    let arr = new Array(rowcount).fill(new Array(colcount))
    for (let i = 0; i < rowcount; i++) {

        const row = grid[i]


        for (let j = 0; j < colcount; j++) {
            if (i === 0 && j === 0) {
                arr[i][j] = parseInt(grid[0][0])
                continue
            }
            const item = row[j]
            if (item === '1') {
                if ((i === 0 || grid[i - 1][index] === '0') && (index === 0 || row[index - 1] === '0')) {
                    count += 1
                }
            }
            console.log('set i ', i, ' index ', index, ' count ', count);
            arr[i][index] = count




            count = (i > 0 && j > 0) ? arr[i - 1][j - 1] : 0
            console.log('last count ', count);
            const col = grid.slice(0, i + 1).map(row => row[j])
            col.forEach((item, index) => {
                if (item === '1') {
                    if ((j === 0 || grid[index][j - 1] === '0') && (index === 0 || col[index - 1] === '0')) {
                        count += 1
                    }
                    console.log('set index ', index, '  j ', j, ' count ', count);
                    arr[index][j] = count
                }
            })


            // if(grid[i][j] === '1' && (i>0 && grid[i-1][j] === '0') && (j>0 && grid[i][j-1] === '0')) {
            //     arr[i][j] -= 1
            // }
            // console.log('guangy set i ', i, ' j ', j, ' value ', arr[i][j] );
            // arr[i][j] = count
        }

    }
    return arr[rowcount - 1][colcount - 1]

};

// const grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid));