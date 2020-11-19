// 三个状态
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

promise
return new MyPromise((resolve, reject) => {
  if (promise.status === FULFILLED) {
    resolve(promise.value);
  } else if (promise.status === REJECTED) {
    reject(promise.reason);
  }
});

class MyPromise {
  constructor(executor) {
    // 初始化
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      // 状态为PENDING才能转化为FULFILLED状态
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach((callback) => {
          this.value = callback(this.value)
        });
      }
    }

    const reject = (reason) => {
      // 状态为PENDING才能转化为REJECTED状态
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onResolvedCallbacks.forEach((callback) => {
          this.reason = callback(this.reason)
        });
      }
    }
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulFilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      resolve(onFulFilled(this.value));
    });
    if (typeof onFulfilled === 'function') {
      this.onResolvedCallbacks.push(onFulFilled);
    }
    if (typeof onRejected === 'function') {
      this.onResolvedCallbacks.push(onRejected);
    }
  }
}