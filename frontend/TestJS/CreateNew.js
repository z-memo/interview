/*
* new 的实例化
* 步骤：
（1）创建一个新对象o；
（2）将构造函数的作用域赋给新对象（因此this就指向了这个对象）；
（3）执行构造函数中的代码（为这个新对象添加属性）；
（4）判断返回值类型：
如果是值类型，就丢弃它，还是返回新对象o。
如果是引用类型，就返回这个引用类型的对象result，替换掉新对象o。
（详见newFunc）

参考：
https://juejin.im/post/5b397b526fb9a00e5d7999a4
https://www.zhihu.com/question/36440948/answer/213711157
https://segmentfault.com/a/1190000008576048
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
* */

function Person(name, isObject) {
    this.name = name;
    return isObject ? { type: name } : name;
}

function newFunc(constructor, ...data) {
    // 模拟new 实例化
    const o = {};
    o.__proto__ = constructor.prototype;
    // const result = constructor.call(o, name,type);
    const result = constructor.apply(o, data);
    return typeof result === "object" ? result : o;
}
const test1 = new Person("名字", false);
console.log("test1", test1, test1 instanceof Person); // true

const test2 = newFunc(Person, "名字", false);
console.log("test2", test2, test2 instanceof Person); // true

const test12 = new Person("名字", true);
console.log("test12 return is object", test12, test12 instanceof Person); // false

const test22 = newFunc(Person, "名字", true);
console.log("test22 return is object", test22, test22 instanceof Person); // false
