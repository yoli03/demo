const p = new Promise((resolve,reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

p.then(() => {
  console.log(3)
})

console.log(4)