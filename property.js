import Dep from "./Dep.js";

function defineReactive(data, key, val) {
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend()
      return val
    },
    set: function (newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
      dep.notify()
    }
  })
}

let a = {}
defineReactive(a, 'hello', 'world')
console.log(a.hello)
a.hello = 'hi'
console.log(a.hello)
