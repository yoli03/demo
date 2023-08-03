class Stack {
  constructor() {
    this._list = []
  }
  // 入栈
  push(value) {
    this._list.push(value)
  }
  // 出栈
  pop() {
    return this._list.pop()
  }
}

const stackArr = new Stack()

stackArr.push(1)
stackArr.push(2)
stackArr.push(3)

console.log(stackArr._list)
console.log(stackArr.pop())
console.log(stackArr._list)