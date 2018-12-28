## js
1. es6有哪些新特性？（爱回收）
    ```
    箭头函数、Map、Set等
    ```

2. let 和var的区别？
    [变量提升](https://juejin.im/entry/59cf4b82f265da065b66d86d)
    ```
    let 局部变量，声明的变量，只在let命令所在的代码块内有效。
    var 全局变量
    局部作用域
    变量在函数内声明，变量为局部作用域。
    局部变量：只能在函数内部访问。

    闭包就是能够读取其他函数内部变量的函数。
    ```
3. 箭头函数和普通function的区别，什么时候不能用箭头函数？

    [参考segmentfault](https://segmentfault.com/a/1190000007074846)
    ```
    箭头函数在声明的时候就绑定了执行上下文，要动态改变上下文是不可能的,
    箭头函数是不能用来做构造函数
    箭头函数不绑定arguments,取而代之用rest参数…解决
    箭头函数没有原型属性。
    ```
    ```
    var foo = (...args) => {
      return args[0]
    }

    console.log(foo(1))
    ```
4. promise有哪些状态，有哪些方法, 它的执行机制是怎样的？（百度，喜马拉雅）
    ```
    Promise：三个状态、两个过程、一个方法，快速记忆方法：3-2-1
    三个状态：pending、fulfilled、rejected
    两个过程：
    pending→fulfilled（resolve）
    pending→rejected（reject）
    一个方法：then
    ```
5. 实现一下promise构造函数，还有then，finally方法（百度，喜马拉雅）

    [参考](http://es6.ruanyifeng.com/#docs/promise#Promise-prototype-finally)
   ```
   finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
   ```
    ```
    promise
    .finally(() => {
      // 语句
    });

    // 等同于
    promise
    .then(
      result => {
        // 语句
        return result;
      },
      error => {
        // 语句
        throw error;
      }
    );
    ```
6. 说说你对async/await的认识 （百度）
    ```
    1.async 申明定义一个异步执行的函数，无阻塞，不会阻塞后面代码执行
    2. async 函数的返回值是一个Promise对象

    1. await 等待Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。
        它只能在异步函数 async function 中使用。
    ```
7. map和forEach的区别 （蚂蚁金服）
8. map和for的区别
9. 你了解哪些模块化的方案？（百度）
    [参考segmentFault](https://juejin.im/post/5aaa37c8f265da23945f365c)
    ```
    cmd,
    amd,
    commonjs,
    ES6 module
    ```
10. 深拷贝和浅拷贝是怎样的，实现一个深拷贝的方法（多家公司问到）
    ```
     const deepClone = initalObj => {
     if (typeof initalObj !== "object" && typeof initalObj !== "function") {
       // 原始类型数据直接返回
       return initalObj;
     }
     const obj = initalObj instanceof Array ? [] : {};
     for (let i in initalObj) {
       // if (initalObj.hasOwnProperty(i)) {
       obj[i] = typeof initalObj[i] === "object" ? deepClone(initalObj[i]) : initalObj[i];
       // }
     }
     return obj;
    };
    ```
11. 如何实现一个私有变量（蚂蚁金服）
12. 有两个异步事件,规定事件a结束后做一件事，两个事件都结束后做一件事情，有一个限制每个事件的最长时间控制为300ms，否则做另一件事情。es5实现（蚂蚁金服）
13. 实现一个节流函数（蚂蚁金服）
14. 手动实现一个document.getElementById（蚂蚁金服）
15. 谈谈for of (蚂蚁金服）
16. 如何判断一个对象是数组，如何判断一个数字类型?
    [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
    ```
    [] instanceof Array
    Array.isArray( [] )
    Object.prototype.toString.call([])==="[object Array]"
    ```
    ```
    typeof xxx得到的值有以下几种类型：undefined boolean number string object function、symbol
    ```
17. 下面的的输出是什么，b是全局变量还是局部变量？(携程）
18. 原生ajax是怎样的过程？
19. 插入dom有哪些方法？
20. 常用的浏览器对象有哪些？
21. 说说cookie, locaStorage, sessionstorage
    ```
    cookie 确实非常小，它的大小限制为4KB左右,主要用途有保存登录信息
    ```
    ```
    localeStorage 用于本地存储,一般为5MB，除非被清除，否则永久保存
    ```
    ```
    session :会话，一般5mb仅在当前会话下有效，关闭页面或浏览器后被清除
    ```
    [参考](http://jerryzou.com/posts/cookie-and-web-storage/)

    [参考2](https://juejin.im/post/5a191c47f265da43111fe859)

22. js继承

    [参考](https://juejin.im/post/5b6845aa6fb9a04fea58bee6)

23. 构造函数,super
    [参考](https://juejin.im/post/5c04fea5f265da6133565696)
     ```
     JavaScript 强制规定，如果你想在构造函数中只用this，就必须先调用 super
     ```
     ```
     super 创建父类的this对象，调用父类的constructor
     ```
     ```
     如果不在constructor加入super，调用this会出错
     ```
23. null与undefined区别 (爱回收)
    ```
    null表示"没有对象"，即该处不应该有值。
    undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。
    ```
24. ==与===区别 （爱回收）
    ```
    "==="叫做严格运算符/ 全等运算符，"=="叫做相等运算符。
    简单说，它们的区别是相等运算符（==）比较两个值是否相等，
    严格相等运算符（===）比较它们是否为“同一个值”。
    如果两个值不是同一类型，
    严格相等运算符（===）直接返回false，
    而相等运算符（==）会将它们转换成同一个类型，
    再用严格相等运算符进行比较。
    ```
25. promise 与 async 区别

    [参考1](https://segmentfault.com/a/1190000013612116)
    [参考2](https://segmentfault.com/a/1190000015594717)
    ```
    1. async代码简洁
    2. async 与await 可以用try catch抓取错误，promise不可以
    3. 如果 Promise 连续调用，对于错误的处理是很麻烦的。你无法知道错误出在哪里。
    ```
    ```
    async function asyncCall() {
      try {
        await asyncFunc();
        throw new Error("oops");
      } catch (e) {
        console.log(e);
        // output
        // Error: oops  at asyncCall (<anonymous>:4:11)
      }
    }
    ```
    ```
    function asyncCall(){
        return asyncFunc()
          .then(()=>asyncFunc())
          .then(()=>asyncFunc())
          .then(()=>asyncFunc())
          .then(()=>throw new Error('oops'));
    }

    asyncCall()
      .catch((e)=>{
        console.log(e);
        // 输出：
        // Error: oops↵    at asyncFunc.then.then.then.then (<anonymous>:6:22)
      });
    ```
26. this 的指向

    > 定义：this的指向是包含它的函数作为方法被调用时所属的对象。
    ```
    1. 包含它的函数
    2. 作为方法被调用时
    3. 所属的对象。
    ```
27. import 与 require区别

    [参考](https://wmaqingbo.github.io/blog/2017/09/15/ES6%E6%A8%A1%E5%9D%97-%E5%92%8C-CommonJS-%E7%9A%84%E5%8C%BA%E5%88%AB/)

    1. 无论 CommonJS 还是 ES6 Module 输出都可以看成是一个具备多个属性或者方法的对象；
    2. default 是 ES6 Module 所独有的关键字，export default fs 输出默认的接口对象，import fs from ‘fs’ 可直接导入这个对象；
    3. ES6 Module 中导入模块的属性或者方法是强绑定的，包括基础类型；而 CommonJS 则是普通的值传递或者引用传递。
    ```
    ES6模块加载的机制，与CommonJS模块完全不同。CommonJS模块输出的是一个值的拷贝，而ES6模块输出的是值的引用。

    CommonJS模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行
    ES6模块是动态引用，如果使用import从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
    ```
    ```
    commonjs 模块输出的是一个值的拷贝，ES6模块输出的是值的引用，
    commonjs 模块是运行时加载，Es6模块是编译时输出接口
    ```
28. `[0]==0`
    > true
    ```
    [0]--->[0].valueOf().toString() // "0"
    ```
    ```
    a={aa:1}
    a.valueOf().toString()
    //"[object Object]"
    ```
    `[] == ![] `
    > true
    ```
    ![]---->false--->0
    []--->[].valueOf().toString()--->""--->false-->0
    ```

29. argument是数组吗？不是的话，怎么变成数组

    不是，类数组对象，
    ```
    function test(a,b,c,d)
       {
       console.log(arguments,[...arguments])//[a,b,c,d]
          var arg = Array.prototype.slice.call(arguments,1);
       console.log(arg) // [b,c,d]
       }
       test("a","b","c","d"); //b,c,d
    ```
31. setTimeout与setInterval 区别

    [参考](https://blog.csdn.net/YJD19970908/article/details/85196926)

32. 每隔1s，输出，1，2，3，4，5，6 （使用promise写法

    [代码](./TestJS/promiseSecond.js)

33. 手写bind方法// 手写call方法

    [代码bind](./TestJS/CreateBind.js)

    [代码call](./TestJS/CreateCall.js)

34. generator

35. proxy

36. 响应式对象

37. 下列代码结果返回

    ```
    var a = 1;
    function b() {
      a = 10;
      return;
      function a() {}
    }
    b();
    console.log(a); // 1
    ```

    ```
    function a() {
      this.func = "func";
      console.log("this", this);
    }
    var b = {
      test: new a()
    };
    b.test; // this a { func: 'func' }
    ```
