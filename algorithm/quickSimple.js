// 简单快排
const arr = [4,1,6,9,3,2,8,7,5]
function compare(a, b) {
  return a > b
}

function quickSort(arr) {
  if(!arr || !arr.length) return []

  const leader = arr[0]
  let left = []
  let right = []
  for(let i=1 ; i< arr.length; i++) {
    if (compare(leader, arr[i])) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  left = quickSort(left)
  right = quickSort(right)
  left.push(leader)
  return left.concat(right)
}

console.log(quickSort(arr))