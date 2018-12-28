// 参考 https://github.com/Alvin-Liu/Blog/issues/9

const deepClone = initalObj => {
  if (typeof initalObj !== "object" && typeof initalObj !== "function") {
    // 原始类型数据直接返回
    return initalObj;
  }
  const obj = initalObj instanceof Array ? [] : {};
  for (let i in initalObj) {
      // 高级浏览器已经在 for in 中屏蔽了来自原型的属性，但是这里建议大家还是加上这个判断，保证程序的健壮性
      // if (initalObj.hasOwnProperty(i)) { hasOwnProperty 是严格限制于可枚举项目的
    obj[i] = typeof initalObj[i] === "object" ? deepClone(initalObj[i]) : initalObj[i];
    // }
  }
  return obj;
};
// 测试用例：
var srcObj = {
  a: 1,
  b: {
    b1: ["hello", "hi"],
    b2: "JavaScript"
  }
};
var abObj = srcObj;
var tarObj = deepClone(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a); // 2
console.log(abObj.b.b1[0]); // Hello

console.log(tarObj.a); // 1
console.log(tarObj.b.b1[0]); // "hello"
