/*
 * @Author: MBCOFFICE\YC01538 houling0313@163.com
 * @Date: 2023-07-03 15:08:02
 * @LastEditors: MBCOFFICE\YC01538 houling0313@163.com
 * @LastEditTime: 2023-07-04 10:36:30
 * @FilePath: \demo\teacher_yuan\promise\async\2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Mock = require('./mock-min')
const _data = Mock.mock({
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': '@cname()'
  }]
})


function sendMessage(name) {
  console.log(`邓哥:${name},最近有谣言说我喜欢你，我要澄清一下，那不是谣言`)
  console.log(`============等待${name}回复==========`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.1) {
        resolve(`${name}: 邓哥，我是9，你是3，除了你，还是你！`)
      } else {
        reject(`${name}: 邓哥，你是一个好人，`)
      }
    }, Math.ceil(Math.random()*3000))
  })
}

(async () => {
  let flag = false
  for (const item of _data.list) {
    try {
      const reply = await sendMessage(item.name)
      console.log(reply)
      console.log('表白成功')
      flag = true
      break
    } catch(err){
      console.log(err)
      console.log('表白失败')
    }
  }
  if (!flag) {
    console.log('邓哥也太惨了，要孤老终生了！')
  }
})()