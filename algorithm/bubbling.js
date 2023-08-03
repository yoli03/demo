/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-26 15:23:20
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-27 10:13:28
 * @FilePath: \demo\algorithm\bubbling.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 排序

const arr = [4,1,6,9,3,2,8,7,5]

function getMin(arr) {
  var index = 0
  for(let i = 0; i<arr.length; i++) {
    if(arr[i]!==null && arr[i] < arr[index] || (arr[index] == null && arr[i]!==null)) {
      index = i
    }
  }
  var result = arr[index]
  arr[index] = null
  return result
}

// function sort(arr) {
//   var newArr = new Array(arr.length)
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = getMin(arr)
//   }
//   return newArr
// }
// console.log(sort(arr))



// 冒泡排序
// 排序的本质是比较和交换
function compare(a, b) {
  return a < b
}

function exchange(arr, a , b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b]= temp
}

function sortByBubbling(arr) {
  for(let i = 0; i<arr.length; i++) {
    for(let j = 0; j<arr.length - i; j ++) {
      if(compare(arr[j], arr[j+1])) {
        exchange(arr,j, j+1)
      }
    }
  }
}
sortByBubbling(arr)
// console.log(arr.sort((a,b)=>a - b))
// const arr1 = arr.sort((a,b)=>a - b)
console.log(arr)


