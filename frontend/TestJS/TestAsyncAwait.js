async function f() {
  await Promise.reject("出错了");
  await Promise.resolve("hello world"); // 不会执行
}
async function getError() {
  try {
    await Promise.reject("出错了");
  } catch (e) {
    console.log("error", e);
  }

  return await Promise.resolve("hello world");
}

async function fGetError2() {
  await Promise.reject("出错了");
  await Promise.resolve("hello world"); // 不会执行
}

async function fGetError3() {
  return await Promise.reject("出错了").catch(e => {
    console.log("errror", e);
  });
}
async function fGetError4ToThen() {
  return await Promise.reject("出错了")
    .catch(e => {
      console.log("errror", e);
      return e;
    })
    .then(resp => resp);
}
// console.log("f", f().then(resp => console.log("resolve", resp)));
console.log(
  getError()
    .then(resp => {
      console.log("resp", resp);
    })
    .catch(e => {
      console.log("get-----error", e);
    })
);
// console.log("fGetError3", fTest().then(resp => console.log("resolve", resp)));
// console.log("fGetError2", fGetError2().catch(e => console.log("error???", e)));
