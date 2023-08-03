/**
 * 
 */
class Quenu {
  private _list:any[] = []
  
  constructor() {

  }

  // 入队
  enqueue<T>(ele:T) {
    this._list.push(ele)
  }

  // 出队
  dequeue() {
    return this._list.shift()
  }
  // 查看第一个元素
  frist() {
    return this._list[0]
  }

  // 查看队列是否为空
  isEmpty() {
    return this._list.length === 0
  }

  // 长度
  size() {
    return this._list.length
  }
}

const a = [1,2,3,4,5,6]
var quenu = new Quenu()
a.forEach(i => quenu.enqueue(i))

console.log(quenu.size)
