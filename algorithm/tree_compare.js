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
const b2 = new Node('b')
const c2 = new Node('c')
const d2 = new Node('d')
const e2 = new Node('e')
const f2 = new Node('f')
const g2 = new Node('g')

a2.left= c2
a2.right= b2
c2.left= f2
c2.right=g1
b2.left=d2
b2.right = e2


function treeCompare(root1, root2) {
  if(root1 === root2) return true
  if(root1 && !root2 || !root1 && root2) return false
  if(root1.value !== root2.value) return false
  const leftBoolean = treeCompare(root1.left, root2.left)
  const rightBoolean = treeCompare(root1.right , root2.right)
  return leftBoolean && rightBoolean
}


console.log(treeCompare(a1, a2))

console.log(treeCompare(a1, b2))





const a3 = new Node('a')
const b3 = new Node('b')
const c3 = new Node('c')
const d3 = new Node('d')
const e3 = new Node('e')
const f3 = new Node('f')
const g3 = new Node('g')

a3.left= c3
a3.right= b3
c3.left= f3
c3.right=g3
b3.left=e3
b3.right = d3


// 左右互换也算同一棵树

function treeCompare2(root1, root2) {
  if(root1 === root2) return true
  if(root1 && !root2 || !root1 && root2) return false
  if(root1.value !== root2.value) return false
  const leftBoolean = treeCompare2(root1.left, root2.left)
  const rightBoolean = treeCompare2(root1.right , root2.right)
  return leftBoolean && rightBoolean  || (treeCompare2(root1.left, root2.right) && treeCompare2(root1.right, root2.left))
}
console.log(treeCompare(a1,a3))
console.log(treeCompare2(a1,a3))