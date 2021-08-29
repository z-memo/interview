/**
 * @desc promise 进度通知
 * */

class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = [];
    super((resolve, reject) => {
      return executor(resolve, reject, status => {
        console.log("notifyHandlers", notifyHandlers);
        notifyHandlers.map(handler => handler(status));
      });
    });

    // this.notifyHandlers 与 notifyHandlers 指向同一个地址
    this.notifyHandlers = notifyHandlers;
  }

  notify(notifyHandler) {
    // 只能用push
    this.notifyHandlers.push(notifyHandler);
    return this;
  }
}

let p = new TrackablePromise((resolve, reject, notify) => {
  function countdown(x) {
    if (x > 0) {
      notify(`目前进度：${20 * x}%`);
      setTimeout(() => countdown(x - 1), 1000);
    } else {
      resolve();
    }
  }

  countdown(5);
});

p.notify(x => {
  console.log("notify:--->", x);
}).notify(x => {
  console.log("bbbb:===>", x);
});

p.then(() => {
  console.log("completed!");
});
