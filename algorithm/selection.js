/**
 * 选择排序
 */
const arr = [4,1,6,9,3,2,8,7,5]
function compare(a,b) {
  return a < b
}

function exchange(arr , a, b) {
  const temp = arr[a]
  arr[a]=arr[b]
  arr[b]=temp
}

function sort(arr) {
  for(let i = 0; i<arr.length; i++) {
    let maxLen = 0
    for(let j=0; j< arr.length - i; j++) {
      if(compare(arr[maxLen], arr[j])) {
        maxLen = j
      }
    }
    exchange(arr, maxLen, arr.length-1-i)
  }
}

sort(arr)
console.log(arr)