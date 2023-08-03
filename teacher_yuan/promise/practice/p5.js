const p = new Promise((resolve,reject) => {
  console.log(1)
  setTimeout(() => {
    console.log(2)
    resolve()
    console.log(3)
  })
})

p.then(() => {
  console.log(4)
})

console.log(5)