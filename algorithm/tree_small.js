//  最小生成树 --- 普利姆算法

function Node(value) {
  this.value = value
  this.neighbor = []
}

const pointSet = []
const arr = ['a', 'b', 'c', 'd', 'e']
arr.forEach(ele => {
  const _leaf = new Node(ele)
  pointSet.push(_leaf)
});
const max = 100000
const distance = [
  [0, 4, 7, max, max],
  [4, 0, 8 , 6 , max],
  [7, 8 , 0 , 5, max],
  [max, 6, 5, 0, 7],
  [max, max, max, 7,0]
]
function getIndex(value) {
 for (let i = 0 ; i< pointSet.length; i++) {
    if (pointSet[i].value === value) {
      return i
    }
 }
  return -1
}

function getMinDisNode(pointSet, distance, nowPointSet) {
  var fromNode = null // 线段起点
  var minDisNode  = null // 线段终点
  var minDis = max
  for (let i = 0; i < nowPointSet.length; i++) {
    const _nowPointIndex = getIndex(nowPointSet[i].value) // 获取当前节点的序号
    for(let j = 0; j < distance[_nowPointIndex].length; j++) {
      var thisNode = pointSet[j]
      // 首先这个节点不能是已经接入的点， 其次点之间的距离得是目前的最小值
      if (nowPointSet.indexOf(thisNode) < 0 && distance[_nowPointIndex][j] < minDis) {
        fromNode = nowPointSet[i]
        minDisNode = thisNode
        minDis = distance[_nowPointIndex][j]
      }
    }
  }
  fromNode.neighbor.push(minDisNode)
  minDisNode.neighbor.push(fromNode)
  return minDisNode
}

function prim(pointSet, distance, start) {
  var nowPointSet = []
  nowPointSet.push(start)
  // 获取最小代价的边
  while(true) {
    var minDisNode = getMinDisNode(pointSet, distance, nowPointSet)
    nowPointSet.push(minDisNode)
    if(nowPointSet.length === pointSet.length) {
      break
    }
  }
  return nowPointSet
}

prim(pointSet, distance,  pointSet[2])


console.log(pointSet)