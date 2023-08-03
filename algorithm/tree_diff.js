/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-31 14:31:07
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-31 15:12:24
 * @FilePath: \demo\algorithm\tree_diff.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

const a1 = new Node('a')
const b1 = new Node('b')
const c1 = new Node('c')
const d1 = new Node('d')
const e1 = new Node('e')
const f1 = new Node('f')
const g1 = new Node('g')


a1.left = c1
a1.right = b1
c1.left = f1
c1.right = g1
b1.left= d1
b1.right = e1

const a2 = new Node('a')
const b2 = new Node('z')
const c2 = new Node('c')
const d2 = new Node('x')
const e2 = new Node('e')
const f2 = new Node('f')
const g2 = new Node('g')

a2.left= c2
a2.right= b2
c2.left= f2
f2.right=g2
b2.left=d2
b2.right = e2


// 新增，修改，删除
// {type: '新增'， origin:  null, now: c2}
// {type: '修改'， orgin：c1, now: c2}
// {type: '删除'， orgin: c1, now: null}

function diffTree(root1, root2, diffList) {
  if(root1 === root2) return diffList
  if(root1 === null && root2) {
    diffList.push({
      type: '新增',
      orgin: null,
      now : root2
    })
  } else if (root1 && !root2) {
    diffList.push({
      type: '删除',
      orgin: root1,
      now: null
    })
  } else if (root1.value !== root2.value) {
    diffList.push({
      type: '修改',
      orgin: root1,
      nwo: root2
    })
    diffTree(root1.left, root2.left, diffList)
    diffTree(root1.right, root2.right, diffList)
  } else {
    diffTree(root1.left, root2.left, diffList)
    diffTree(root1.right, root2.right, diffList)
  }
}
const diff = []
diffTree(a1,a2, diff)
console.log(diff)