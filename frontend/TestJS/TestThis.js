function test() {
  setTimeout(function() {
    console.log("function", this); // 永远指的window
  }, 1000);
  setTimeout(() => {
    console.log("==>", this); // 指的执行上下文
  }, 1000);
}
test();
test.call({ test: 1 });

const a = [1, 2, 3, 4, 5];
a.forEach(function(item) {
  console.log("aaaa", this);
});
