const data = [{
  type: 'cook',
  time: 1000,
  do: '邓哥打开的电饭煲',
  success: '饭已经ok',
  error: '做饭忘记加水了，米饭已经成了爆米花'
}, {
  type: 'wash',
  time: 2000,
  do: '邓哥打开的洗衣机',
  success: '衣服已经洗好了',
  error: '洗衣服时停水了，洗了一个寂寞'
},{
  type: 'sweep',
  time: 3000,
  do: '邓哥打开的扫地机器人',
  success: '地板扫的真干净',
  error: '扫地机器人被哈士奇一爪掀翻了'
}]
const getData = (type) => {
  return data.find(item => item.type === type)
}
function dowork(type) {
  const _data = getData(type)
  return new Promise((resolve, reject) => {
    console.log(_data.do)
    setTimeout(() => {
      if(Math.random() < 0.5) {
        resolve (_data.success)
      } else {
        reject (_data.error)
      }
    }, _data.time)
  })
}

Promise.allSettled([dowork('cook'), dowork('wash'), dowork('sweep')]).then(res => {
  console.log(res.map(t => t.value || t.reason).join(';'))
})