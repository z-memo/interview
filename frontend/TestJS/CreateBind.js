// https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdd0d8e6fb9a04a044073fe
//bind 返回了一个函数，对于函数来说有两种方式调用，一种是直接调用，
// 一种是通过 new 的方式，我们先来说直接调用的方式
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("error");
  }
  const thatFunc = this;
  const extra = [...arguments].slice(1);
  return function Func() {
    // 因为返回了一个函数，我们可以 new Func()，所以需要判断
    if (this instanceof Func) {
      return new thatFunc(...extra, ...arguments);
    }
    const arg = [...extra, ...arguments];
    return thatFunc.apply(context, arg);
  };
};
