const test = () => {
  // 为了测试event loop
  setInterval(() => {
    console.log("setInterval");
  }, 1000);
  new Promise(resolve => {
    console.log("new promise resolve");
    resolve();
  }).then(() => {
    console.log("promise then");
  });
  setTimeout(() => {
    console.log("setTimeout 1");
  }, 1000);
  setTimeout(() => {
    console.log("setTimeout 2");
  }, 1000);
};
test();
