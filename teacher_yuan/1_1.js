function delay(duration) {
  var start = Date.now()
  while(Date.now() -start < duration) {}
}
setTimeout(()=>{
  console.log(1)
}, 0)

new Promise((resolve, reject) => {
  console.log(2)
  resolve()
}).then(_=>{
  console.log('=')
})
Promise.resolve().then(_ => {
  console.log(3)
})
// delay(1000)
console.log(4)



