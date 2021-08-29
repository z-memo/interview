/**
 * promise 取消
 * 取消令牌：CancelToken
 * 生成的取消令牌实例提供一个接口，利用这个接口可以取消promise，同时也提供一个promise实例，
 * 可以用来触发取消后的操作并求值取消状态
 * */
class CancelToken {
  constructor(cancelFn) {
    this.promise = new Promise(resolve => {
      cancelFn(() => {
        console.log("click cancel");
        resolve();
      });
    });
  }
}

let cancelToken = new CancelToken(cancelCallBack => {
  console.log("done something");
  cancelCallBack();
});

cancelToken.promise.then(() => {
  console.log("已经取消");
});
