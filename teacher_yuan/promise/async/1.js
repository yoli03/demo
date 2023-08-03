/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-03 13:58:10
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-05 13:46:10
 * @FilePath: \demo\teacher_yuan\promise\async\1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
async function m() {
  const data = null
  // data.toString()
  // throw 123
  return 123
}

m().then(res => {
  console.log(res)
}, err => {
  console.log('111', err)
})

console.log(m())


async function test () {
  const res = await m()
  console.log(res)
}

test () 