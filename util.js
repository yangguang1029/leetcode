var amn = function(m, n) { // A(m,n) = m * (m-1)   * (m-n+1)
    if (m < n) {
        return 0;
    }
    var re = 1;
    for (var i = m - n + 1; i <= m; i++) {
        re *= i;
    }
    return re;
}

var cmn = function(m,n) {//c(m,n) = (m!)/((m-n)! * n!)
    if(m < n) {
        return 0;
    }
    return fact(m)/(fact(n) * fact(m-n));
}

var fact = function(n) {
    if(n <= 0) {
        return 1;
    }
    let re = 1;
    let index = 1;
    while(index <= n) {
        re *= index;
        index += 1;
    }
    return re;
}

var sortNumFunc = function(left, right) {
    return left - right;
}

var printArr = function(arr) {
    console.log(arr.join("->"));
}

var stringToDic = function(s) {
    var dic = {};
    for (var i = 0, len = s.length; i < len; i++) {
        var c = s[i];
        var tmp = dic[c];
        if (tmp) {
            dic[c] = tmp + 1;
        } else {
            dic[c] = 1;
        }
    }
    return dic;
}

var getSubArray = function(arr, count) { //从array中获取count个，内容相同即为一个，使用位运算
    var len = arr.length;
    if (count > arr || count <= 0) {
        return [
            []
        ];
    }
    var re = [];
    for (var i = 0, max = 1 << len; i < max; i++) {
        var tmp = [];
        for (var index = 0; index < len; index++) {
            var j = 1 << index;
            if (i & j) {
                tmp.push(arr[index]);
            }
        }
        if (count === tmp.length) {
            re.push(tmp);
        }
    }
    return re;
}

var addArr = function(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce(function(a, b) {
        return a + b;
    })
}

var getAllSubArray = function(arr) {
    var len = arr.length;
    var re = [];
    for (var i = 0, max = 1 << len; i < max; i++) {
        var tmp = [];
        for (var index = 0; index < len; index++) {
            var j = 1 << index;
            if (i & j) {
                tmp.push(arr[index]);
            }
        }
        re.push(tmp);
    }
    return re;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var createTree = function(arr) {    //通过数组构造一个二叉树。按层顺序排列。每一层的空节点为null。不考虑空节点的子节点。，最后一层剩下都是空节点时可以不写
    var len = arr.length;   //所以 1 null 2 null 3是 
                            //         1
                            //     null    2
                            //         null  3               
    if (len < 0) {
        return null;
    }
    var root = new TreeNode(arr[0]);
    var levelNodes = [root];
    var index = 1;
    while (index < len) {
        var tmp = [];
        for (var i = 0, llen = levelNodes.length; i < llen; i++) {
            if (index >= len) {
                break;
            }
            var node = levelNodes[i];
            var lvalue = arr[index];
            if (lvalue !== null) {
                var left = node.left = new TreeNode(lvalue);
                tmp.push(left);
            }
            index += 1;
            if (index < len) {
                var rvalue = arr[index];
                if (rvalue !== null) {
                    var right = node.right = new TreeNode(rvalue);
                    tmp.push(right);
                }
                index += 1;
            }

        }
        levelNodes = tmp;

    }
    return root;
}

var printTree = function(root) {
    if (!root) {
        console.log("null");
    }
    var arr = [root];
    var len = arr.length;
    var strs = [root.val + ""];
    while (len > 0) {
        var tmp = [];
        var str = "";
        for (var i = 0; i < len; i++) {
            var node = arr[i];
            var left = node.left;
            var right = node.right;
            if (left) {
                str += (left.val + " ");
                tmp.push(left);
            } else {
                str += "null ";
            }
            if (right) {
                str += (right.val + " ");
                tmp.push(right);
            } else {
                str += "null ";
            }
        }
        strs.push(str);
        arr = tmp;
        len = arr.length;
    }
    for (var j = 0, jlen = strs.length; j < jlen - 1; j++) {
        console.log(strs[j])
    }

}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var createList = function(arr) {
    var len = arr.length;
    if (len === 0) {
        return null;
    }
    var list = new ListNode(arr[0]);
    var p = list;
    for (var i = 1; i < len; i++) {
        p.next = new ListNode(arr[i]);
        p = p.next;
    }
    return list;
}

var printList = function(list) {
    if (!list) {
        console.log("list is null");
        return;
    }
    var p = list;
    while (p) {
        console.log(p.val);
        p = p.next;
    }
}

function testArrayJoin() {
    console.log("before " + Date.now());
    let arr = [];
    for (let i = 0; i < 10000; i++) {
        arr.push("12345");
    }
    let s = arr.join("");
    console.log("after " + Date.now());
}

function testStrJoin() {
    console.log("before " + Date.now());
    let s = ""
    for (let i = 0; i < 10000; i++) {
        s += "12345";
    }
    console.log("after " + Date.now());
}

function _Node(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
};

// 构造无向图，每个节点值唯一
// 简单起见，每个节点的值都和它的索引相同
// [[2,4],[1,3],[2,4],[1,3]]
function createGraph(arr) {

    const m = new Map();
    const nodes = arr.map((item, index) => {
        const val = index+1
        const node = new _Node(val)
        m.set(val, node)
        return node;
    })

    nodes.forEach((node, index)=> {
        const neighbors = arr[index]
        node.neighbors = neighbors.map(item => m.get(item))
    })
    
    return nodes[0]

}