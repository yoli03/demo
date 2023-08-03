function deepClone (obj:any) {
  return new Promise(resolve => {
    const {port1, port2} = new MessageChannel()
      port1.postMessage(obj);
      port2.onmessage = (msg:any) => {
        resolve(msg.data)
      }
  })
}