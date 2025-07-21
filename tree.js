// 用非递归的方式先序遍历二叉树

function traversePre(node) {
    let arr = []
    if(!node) {
        return arr
    }
    // 用栈做存储
    const tmp = [node]
    while(tmp.length > 0) {
        const n = tmp.pop()
        arr.push(n.val)
        if(n.right) {
            tmp.push(n.right)
        }
        if(n.left) {
            tmp.push(n.left)
        }
    }
    return arr
}

// 递归
function traversePre1(node) {
    if(!node) {
        return []
    }
    const left = traversePre1(node.left)
    const right = traversePre1(node.right)
    return [node.val, ...left, ...right] 
}

// 非递归，中序遍历。借助标志位来标记是否已经遍历过了
function traverseMid(node) {
    if(!node) {
        return []
    }
    let arr = [node]
    let isalldone = false
    while(!isalldone) {
        isalldone = true
        let newarr = []
        arr.forEach(item => {
            if(item.isdone) {
                newarr.push(item)
            } else {
                item.isdone = true
                isalldone = false
                if(item.left) {
                    newarr.push(item.left)
                }
                newarr.push(item)
                if(item.right) {
                    newarr.push(item.right)
                }
            }
        })
        arr = newarr
    }
    return arr.map(item => item.val)
}

const tree = createTree([1,2,3,4,5,null,8, 6,null,7])
console.log(traverseMid(tree));