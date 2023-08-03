/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-28 11:35:33
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-28 11:45:34
 * @FilePath: \demo\algorithm\tree_preOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}


var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')


a.left = c
a.right= b
c.left=f
c.right=g
b.left=d
b.right = e


// 前序遍历
console.log("======前序遍历======")
var arr1 = []
function preOrder(root) {
  if(root == null) return
  arr1.push(root.value)
  preOrder(root.left)
  preOrder(root.right)
}

preOrder(a)
console.log(arr1.join('-'))


// 中序遍历
console.log("======中序遍历======")
var arr2 = []
function inOrder(root) {
  if(root == null) return
  inOrder(root.left)
  arr2.push(root.value)
  inOrder(root.right)
}

inOrder(a)

console.log(arr2.join('-'))



console.log("======后序遍历======")
var arr3 = []
function postOrder(root) {
  if(root == null) return
  postOrder(root.left)
 
  postOrder(root.right)
  arr3.push(root.value)
}

postOrder(a)

console.log(arr3.join('-'))