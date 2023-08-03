/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-03 09:50:49
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-03 10:18:01
 * @FilePath: \demo\teacher_yuan\promise\p1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const pro1 = new  Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
}).then(data => {
  return 2
}).catch(err => {
  return 3
}).then(res => {
  console.log(res)
})

setTimeout(() => {
  console.log(pro1)
}, 2000)