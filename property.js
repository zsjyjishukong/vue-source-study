function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val
    },
    set: function (newVal) {
      if (val === newVal) {
        return
      } else {
        val = newVal
      }
    }
  })
}
let a = {};
defineReactive(a, 'hello', 'world')
console.log(a.hello)
a.hello = 6
console.log(a.hello)

