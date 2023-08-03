function a() {
  console.log(1);
  Promise.resolve().then(_ => {
    console.log('Promise' + 1)
  })
}


setTimeout(() => {
  console.log(1)
  Promise.resolve().then(a)
}, 0)


Promise.resolve().then(a)

console.log(3)