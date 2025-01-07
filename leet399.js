/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

// 遍历 equations 时，首先把自身存到 map 里，然后遍历所有的，将可能的结果都存在 map 里，

var calcEquation = function(equations, values, queries) {

    const m = new Map()

    function insert(question, value) {
        // 插入一个问题，此时遍历所有 map 内存储的数据，将生成的新数据存进去
        const key = `${question[0]}-${question[1]}` // 必须转成字符串作为 key，否则以对象为 key 的话，没办法比较相等
        if(m.get(key)) {
            return;
        }
        m.set(key, value)
        m.set(`${question[0]}-${question[0]}`, 1)
        m.set(`${question[1]}-${question[1]}`, 1)

        m.forEach((innervalue, innerkey)=>{
            if(innerkey === key) {
                return;
            }
            const q = innerkey.split('-')
            // 如果
            if(q[0] === question[0]) {
                insert([q[1], question[1]], value/innervalue)
            }
        })

        insert([question[1], question[0]], 1/value)
    }

    equations.forEach((item, index) => {
        insert(item, values[index])
    })

    return queries.map(item => {
        return m.get(`${item[0]}-${item[1]}`) || '-1'
    })

};

// const equations = [["a","b"],["b","c"],["bc","cd"]]
// const values = [1.5,2.5,5.0]
// const queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]

const equations = [["a","b"],["b","c"]]
const values = [1.5,2.5]
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]

console.log(calcEquation(equations, values, queries));