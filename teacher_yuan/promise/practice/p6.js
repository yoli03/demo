const P1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject()
  }, 1000)
})

const P2 = P1.catch(() => {
  return 2
})

console.log('promise1', P1)
console.log('promise2', P2)


setTimeout(() => {
  console.log('promise1', P1)
  console.log('promise2', P2)
}, 2000)