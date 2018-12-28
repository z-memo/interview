let atem;
Promise.resolve({ a: "1" })
  .then(resp => {
    console.log("resp", resp);
    atem = resp;
    return resp;
  })
  .then(resp => {
    console.log("num2Resp", resp);
    console.log("atem", atem);
  });
