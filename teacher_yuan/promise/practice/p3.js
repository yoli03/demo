/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-03 11:16:45
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-13 10:25:05
 * @FilePath: \demo\teacher_yuan\promise\practice\p3.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fetchStudents = (page) => {
  
  return new Promise((resolve, reject) => {
    const timeout =  Math.floor(Math.random() * 10000)
      setTimeout(() => {
        if (Math.random() < 1) {
          const data = []
          for (let i = (page-1)*10; i < page*10 ; i ++) {
            data.push({
              name: 'stutdent' + (i + 1),
              index: i + 1
            })
          }
          resolve(data)
        } else {
          reject({
            err: '数据库异常'
          })
        }
       
      }, timeout);
  })
}
const arr = new Array(10).fill(1).map((t, i) => fetchStudents(i+1))

Promise.all(arr).then(res => {
  console.log(res.flat())
}).catch(err => {
  console.log(err)
})