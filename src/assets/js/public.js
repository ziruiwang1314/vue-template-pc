export default {
  deepClone (obj) {
    if (obj === null) return null
    if (typeof obj !== 'object') return obj
    if (obj.constructor === Date) return new Date(obj)
    if (obj.constructor === RegExp) return new RegExp(obj)
    let newObj = new obj.constructor() // 保持继承链
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) { // 不遍历其原型链上的属性
        let val = obj[key]
        newObj[key] = typeof val === 'object' ? this.deepClone(val) : val // 使用arguments.callee解除与函数名的耦合
        // newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
      }
    }
    return newObj
  }
}
