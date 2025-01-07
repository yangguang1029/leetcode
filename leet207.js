/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


// 本质上是检测是否有环，例如 01 23 10，那么 0 和 1 就不都不能学。
// 在增加时，如果发现前者依赖里有，则增加新的，例如增加 12，则相应增加一个 02，
// 用 set 来存储课程，一个 allset 表示所有，一个 invalidset 表示非法的，两者长度之差则为可以学的课程
var canFinish = function(numCourses, prerequisites) {
    if(prerequisites.length === 0) {
        return true
    }

    let courses = new Set()
    let all = new Set()
    let invalid = new Set()

    function addCourse(c1, c2) {
        // 要学习 c1,必须先学习 c2
        if(courses.has(`${c2}-${c1}`)) {
            // 冲突了，将所有有关联的课程都加入到黑名单里
            invalid.add(c1)
            invalid.add(c2)
            courses.forEach(c => {
                const arr = c.split('-').map(item => parseInt(item))
                if(arr[0] === c1 || arr[1] === c1 || arr[0] === c2 || arr[1] === c2) {
                    invalid.add(arr[0])
                    invalid.add(arr[1])
                }                
            })
        } else {
            const key = `${c1}-${c2}`
            if(courses.has(key)) {
                return;
            }
            // 没有冲突
            courses.add(key)
            all.add(c1)
            all.add(c2)
            // 遍历已有课程，如果其第二个是 c1，那么插入一个 第一个元素-c2 的项目
            courses.forEach(c => {
                const arr = c.split('-').map(item => parseInt(item))
                if(arr[0] === c2) {
                    addCourse(c1, arr[1])
                }                
            })
        }
    }

    prerequisites.forEach(item => {
        addCourse(item[0], item[1])
    })

    return all.size - invalid.size >= numCourses

};

const prerequisites = [[1,4],[2,4],[3,1],[3,2]]
const numCourses = 5
console.log(canFinish(numCourses, prerequisites));