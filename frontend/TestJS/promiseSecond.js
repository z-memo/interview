// 可参考 https://blog.csdn.net/weixin_39147099/article/details/83830587
const runTime = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("timer", time);
      resolve(time);
    }, 1000);
  });
};
Promise.resolve(0)
  .then(val => {
    console.log("1time", val);
    return runTime(val + 1000);
  })
  .then(value => {
    console.log("2 time", value);
    return runTime(value + 1000);
    //   setTimeout(()=>{
    //     console.log('>>>>><<<<<<<')
    //     return 'aaaaaa'
    //   },3000)
  })
  .then(value => {
    console.log("3 time", value);
    return runTime(value + 1000);
  });
