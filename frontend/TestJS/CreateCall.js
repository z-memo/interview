// 首先 context 为可选参数，如果不传的话默认上下文为 window
// 接下来给 context 创建一个 fn 属性，并将值设置为需要调用的函数
// 因为 call 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
// 然后调用函数并将对象上的函数删除
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('error');
  }
  context = context || window;
  context.fn = this;
  const result = context.fn(...[...arguments].slice(1));
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this; // 让fn的上下文为context
  const result = context.fn(...args); // // 相当于context.fn(arguments[1], arguments[2], ...)
  delete context.fn;
  return result;
};
