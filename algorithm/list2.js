/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-25 15:55:51
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-27 14:43:42
 * @FilePath: \demo\algorithm\list2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Node(value) {
  this.value = value
  this.next = null
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
var node6 = new Node(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

// function nizhi(root) {
//   if (root.next) return nizhi(root.next)
//   return root
// }

function nizhi(root) {
  console.log('result', root)
  if(root.next.next == null) { // 当前节点倒数第二个节点
    root.next.next = root  // 让最后一个节点指向自己（倒数第二个节点）
    return root.next  
  } else {
    const result = nizhi(root.next)
    root.next.next = root
    root.next = null
    return result
  }
}

// function bianLink(root) {
//   var temp = root
//   while(true) {
//     if(temp) {
//       console.log(temp.value)
//     } else {
//       break;
//     }
//     temp = temp.next
//   }
// }

function bianLink(root) {
  if(root == null) return 
  console.log(root)
  bianLink(root.next)
}

const newRoot = nizhi(node1)
bianLink(newRoot)