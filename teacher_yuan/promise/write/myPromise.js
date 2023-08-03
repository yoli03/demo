const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


/**
 * 运行一个微队列任务
 * 把传递的函数放到微队列中
 * @param {Function} callBack 
 */
function runMicroTask(callBack) {
  // 判断node环境
  if (process && process.nextTick) {
    process.nextTick(callBack)
  } else if (MutationObserver) {
    const p = document.createElement(p)
    const ovserver = new MutationObserver(callBack)
    ovserver.observe(p, {
      childList: true // 观察元素内部的变化
    })
    p.innerHtml = '1'
  } else {
    setTimeout(callBack, 0)
  }
}

/**
 * 判断一个数据是否是Promise对象
 * @param {any} obj 
 * @returns 
 */
function isPromise(obj) {
  return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')
}

class MyPromise {
  /**
   * 创建一个promise
   * @param {Function} executor 任务执行器，立即执行 
   */
  constructor(executor) {
    try {
      this._state = PENDING // 状态
      this._value = undefined // 数据
      this._handlers = [] // 处理函数形成的队列
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._changeState(REJECTED, err)
      console.log(err)
    }
  }

  /**
   * 
   * @param {string} newState 更改任务状态
   * @param {any} value  相关数据
   */
  _changeState(newState, value) {
    if (this._state !== PENDING) {
      // 目前状态已经被改了
      return
    }
    this._state = newState
    this._value = value
    this._runHandles()
  }

  /**
   * 标记当前任务完成
   * @param {any} data 任务完成的相关数据 
   */
  _resolve(data) {
    this._changeState(FULFILLED, data)
  }

  /**
   * 标记当前任务失败
   * @param {any} reason 任务失败的相关数据
   */
  _reject(reason) {
    this._changeState(REJECTED, reason)
  }

  /**
   * 像处理队列中添加一个函数
   * @param {Function} executor 添加的函数
   * @param {string} state 该函数什么状态下执行
   * @param {Function} resolve then 成功函数
   * @param {Function} reject then 失败函数
   */
  _pushHandles(executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject
    })
  }

  _runHandles() {
    if (this._state === PENDING) {
      // 目前任务仁在挂起
      return
    }
    while (this._handlers[0]) {
      this._runOneHandles(this._handlers[0])
      this._handlers.shift()
    }
  }

  /**
   * 处理一个handler
   * @param {Object} handler 
   */
  _runOneHandles({ executor, state, resolve, reject }) {
    runMicroTask(() => {
      if (this._state !== state) {
        // 状态不一致，不处理
        return
      }

      if (typeof executor !== 'function') {
        this._state === FULFILLED ? resolve(this._value) : reject(this._value)
        return
      }

      try {
        const result = executor(this._value)
        if (isPromise(result)) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  /**
   * Promise A+ 规范的then
   * @param {Function} onFulfilled 
   * @param {Function} onRejected 
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._pushHandles(onFulfilled, FULFILLED, resolve, reject)
      this._pushHandles(onRejected, REJECTED, resolve, reject)
      this._runHandles()
    })
  }

  catch(onRejected) {
    this.then(null, onRejected)
  }

  /**
   * 无论成功还是失败都会执行回调
   * @param {Function} onSetteld 
   */
  finally(onSetteld) {
    return this.then((data) => {
      onSetteld()
      return data
    }, (reason) => {
      onSetteld()
      throw reason
    })
  }

  /**
   * 返回一个已完成的Promise
   * 特殊情况
   * 1.传递的data本身就是Es6的Promise对象
   * 2.传递的data 是PromiseLike {promise A+}
   * @param {any} data 
   */
  static resolve(data) {
    if (data instanceof MyPromise) {
      return data
    }
    return new MyPromise((resolve, reject) => {
      if (isPromise(data)) {
        data.then(resolve, reject)
      } else {
        resolve(data)
      }
    })
  }

  /**
   * 得到一个被拒绝的Promise
   * @param {*} reason 
   */
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  /**
   * 得到一个新的Promise
   * 该promise 的状态取决于proms的执行
   * proms是一个迭代器，包含多个promise
   * 全部promise成功，则返回promise成功，数据为所有
   * 只有一个promise失败，则返回promise失败，原因是第一个失败的promise原因
   * @param {Iterator} proms 
   */
  static all(proms) {
    return new MyPromise((resolve, reject) => {
      try {
        const results = []
        let count = 0
        let fulfilledCount = 0
        for (const p of proms) {
          const i = count
          count++
          this.resolve(p).then(res => {
            results[i] = res
            fulfilledCount++
            if (fulfilledCount === count) {
              // 当前是最后一个promise
              resolve(results)
            }
          },reject)
        }
        if (count === 0) {
          resolve(results)
        }
      } catch (error) {
        reject(error)
        console.error(error)
      }
    })
  }
  
  /**
   * 等待所有的promise 有结果之后
   * 该方法返回的promise完成
   * 并且按照顺序将所有结果汇总
   * @param {Iterator} proms 
   */
  static allSettled(proms) {
    try {
      const ps = [];
      for (const p of proms) {
        ps.push(this.resolve(p).then(value => ({
          status: FULFILLED,
          value
        }), reason => ({
          status: REJECTED,
          reason
        })))
      }
      return this.all(ps)
    } catch (error) {
      reject(error)
      console.error(error)
    }
  }


  static race(proms) {
    return new MyPromise((resolve, reject) => {
      try {
        for (const p of proms) {
          this.resolve(p).then(resolve, reject)
        }
      } catch (error) {
        reject(error)
        console.error(error)
      }
    })
  }
}


// MyPromise.all([1,2,3,4]).then(res => {
//   console.log(res)
// }, err => {
//   console.log('err')
// })

const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('失败')
  }, 1000)
})

// MyPromise.allSettled([
//   pro,
//   MyPromise.resolve(2),
//   MyPromise.resolve(3),
//   4
// ]).then(res => {
//   console.log(res)
// }, err => {
//   console.log('err', err)
// })

const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1500)
})

MyPromise.race([
  pro1,
  pro
]).then(res => {
  console.log(res)
}, err => {
  console.log('err', err)
})

// MyPromise.allSettled([
//   pro,
//   MyPromise.resolve(2),
//   MyPromise.resolve(3),
//   4
// ]).then(res => {
//   console.log(res)
// }, err => {
//   console.log('err', err)
// })

// const pro = new Promise((resolve, reject) => {
//   resolve(1)
// })
// pro.then(res => {
//  console.log(res)
//  return new MyPromise(resolve => {
//   resolve('222')
//  })
// },err =>{

// }).then(res => {
//   console.log(res)
//   throw 3
//  },err =>{
//    console.log('err', err)
//  }).catch(err => {
//   console.log('catchErr', err)
//  })
// console.log(pro)


// function deley(duration) {
//   return new MyPromise(resolve => {
//     setTimeout(() => {
//       resolve('myPromise')
//     }, duration)
//   })
// }

// (async function() {
//   const res = await deley(2000)
//   console.log('ok', res)
// })()