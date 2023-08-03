function Node(value) {
  this.value = value
  this.next = null
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function bianLink(root) {
  var temp = root
  while(true) {
    if(temp) {
      console.log(temp.value)
    } else {
      break;
    }
    temp = temp.next
  }
}


bianLink(node1)