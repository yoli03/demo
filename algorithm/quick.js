// 简单快排
const arr = [4,1,6,9,3,2,8,7, 5]
function swap( arr , a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function quickSort(arr, bengin, end) {
  if(bengin >= end -1) return
  let left = bengin
  let right = end
  do {
    do {
      left++
    } while (left < right && arr[left] < arr[bengin]);
    do {
      right--
    } while (right > left && arr[right] > arr[bengin]);

    // console.log(left,right, '====')
    if(left < right) swap(arr , left ,right)

  } while (left < right);

  const swapPoint = left == right ? right -1 : right

  // console.log(left,right,swapPoint)
  swap(arr ,bengin, swapPoint)
  console.log(arr)
  quickSort(arr, bengin, swapPoint)
  quickSort(arr, swapPoint+1 , end)
}
quickSort(arr, 0 , arr.length)
console.log(arr)