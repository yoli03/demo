const preOrder = ['A', 'C', 'F', 'G', 'B', 'D', 'E']
const inOrder = ['F', 'C', 'G', 'A', 'D', 'B', 'E']
const postOrder = ['F', 'G', 'C', 'D', 'E', 'B', 'A']
function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

// ============根据前序和中序还原后序遍历=====================/
function f1(preOrder, inOrder) {
  if (preOrder== null || inOrder == null || preOrder.length === 0 || inOrder.length === 0|| preOrder.length !== inOrder.length) return null
  var root = new Node(preOrder[0])
  const index = inOrder.indexOf(root.value)
  const preOrderLeft = preOrder.slice(1, index+1)
  const preOrderRight = preOrder.slice(index+1, preOrder.length)
  const inOrderLeft = inOrder.slice(0, index)
  const inOrderRight = inOrder.slice(index+1, inOrder.length)
  root.left = f1(preOrderLeft, inOrderLeft)
  root.right = f1(preOrderRight, inOrderRight)
  return root
}

const tree1 = f1(preOrder, inOrder)
function bianli(root) {
  if(!root) return
  bianli(root.left)
  bianli(root.right)
  console.log(root.value)
}
console.log('--------后序遍历------------')
bianli(tree1)



// ============根据中序和中序还原前序遍历=====================/

function f2(inOrder, postOrder) {
  if (postOrder== null || inOrder == null || postOrder.length === 0 || inOrder.length === 0|| postOrder.length !== inOrder.length) return null
  const  root = new Node(postOrder[postOrder.length-1])
  const index = inOrder.indexOf(root.value)
  const inOrderLeft = inOrder.slice(0, index)
  const inOrderRight = inOrder.slice(index+1)
  const postOrderLeft = postOrder.slice(0, index)
  const postOrderRight = postOrder.slice(index, -1)

  root.left = f2(inOrderLeft, postOrderLeft)
  root.right = f2(inOrderRight, postOrderRight)
  return root
}

const tree2 = f2(inOrder, postOrder)
function bianli2(root) {
  if(root == null) return
  console.log(root.value)
  bianli2(root.left)
  bianli2(root.right)
 
}
console.log('--------前序遍历------------')
bianli2(tree2)