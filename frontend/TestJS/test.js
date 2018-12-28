function a() {
  this.func = "func";
  console.log("this", this);
}
var b = {
  test: new a()
};
b.test; // this a { func: 'func' }
