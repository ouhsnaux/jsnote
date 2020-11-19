# promise

* 三个状态 PENDING、FULFILLED和REJECTED
  * 初始状态为PENDING
  * 可转化为FULFILLED或REJECTED，一旦转变不可更改
* 两个内置参数 resolve和reject
  * resolve 将状态变化为 FULFILLED，并将executor()执行结果保存到value
  * reject  将状态变化为 REJECTED，并将exception保存到reason
* 两个参数 onfulfilled 和 onrejected
  * 如果结果的状态为FULFILLED，执行onfulfilled函数，参数为value
  * 如果结果的状态为REJECTED时，执行onrejected函数，参数为reason
* 一个任务 微任务
  * 生成promise的函数立即执行
  * then函数在本次事件循环的末尾执行
* API
  * resolve
  * reject
  * then
  * catch
  * finally
  * all
  * race
