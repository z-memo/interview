## redux

1. redux 状态树管理

2. redux state 为什么是只读的

   > 为了保留更改历史

   [为什么要创建副本 state](https://www.jianshu.com/p/8287a1dd8ae9)

3. redux 三个核心概念

   > action :要想更新 state 中的数据，你需要发起一个 action。Action 就是一个普通 JavaScript 对象

   > store :整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中

   > reducer :为了把 action 和 state 串起来，开发一些函数，这就是 reducer

4. redux 中间件

   [参考](https://cn.redux.js.org/docs/advanced/Middleware.html)

5. redux 实现原理
6. redux-saga takeEvery,takeLatest 实现方式
7. redux-thunk 作用
