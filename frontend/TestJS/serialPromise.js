// const getData = url => {
//   return fetch(url).then(data => data.json());
// };
//
// // 实现 serialPromise getData串行请求,
// serialPromise([url1, url2]).then(list => {
//   console.log(list[1], list[2]);
// });

const getPromise = (url, timeout = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(url);
    }, timeout);
  });
};

getPromise("url1").then(resp => {
  console.log("resp", resp);
});

const serialPromise = async urls => {
  const result = [];
  for (let url of urls) {
    const data = await getPromise(url);
    result.push(data);
  }

  return result;
};

// 这种方法`有问题，不能用
const serialPromiseMapIsError = async urls => {
  const result = [];
  const data = urls.map(async url => {
    const data = await getPromise(url);
    result.push(data);
    return data;
  });
  console.log("serialPromiseMapIsError data", data);
  return result;
};
// 这种方法`有问题，不能用
const serialPromiseIffMap = async urls => {
  const result = [];
  const data = urls.map(url => {
    (async () => {
      const data = await getPromise(url);
      result.push(data);
    })();
    return "";
  });
  return result;
};

serialPromise(["url1", "url2", "url3"]).then(list => {
  console.log("正解 serialPromise", list);
});
serialPromiseMapIsError(["url1", "url2", "url3"]).then(list => {
  console.log("错误答案 serialPromiseMapIsError", list);
});
serialPromiseIffMap(["url1", "url2", "url3"]).then(list => {
  console.log("错误答案 serialPromiseIffMap", list);
});
