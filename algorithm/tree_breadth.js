function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')


a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

// 对于二叉树来说，深度优先搜索和前序遍历的顺序是一样的
function breadthSearch(rootList, target) {
  if(rootList == null || rootList.length === 0) return  false
  let childList = [] // 当前层，所有节点的子节点都在这个集合
  for(let i =0; i < rootList.length ; i++) {
    if (rootList[i] != null) {
      if (rootList[i].value === target) {
        return true
      } else {
        childList.push(rootList[i].left)
        childList.push(rootList[i].right)
      }
    }
  }
  return breadthSearch(childList, target)
}

console.log(breadthSearch([a], 'f'))

console.log(breadthSearch([a], 'f1'))
console.log(breadthSearch([a], 'c'))