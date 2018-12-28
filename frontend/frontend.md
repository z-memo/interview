爱回收
1. `[1, 30, 4, 21].sort()`输出是
    ```
    [1, 21, 30, 4]
    ```
2. js中有哪些常用的事件
    - 事件绑定
    ```
    var btn = document.getElementById('btn1')
    btn.addEventListener('click', function (event) {
        // event.preventDefault() // 阻止默认行为
        // event.stopPropagation() // 阻止冒泡
        console.log('clicked')
    })
    ```
    - 事件冒泡，阻止事件冒泡,`e.stopPropagation()`就可以阻止冒泡,准确来说是停止传播
    ```
    var body = document.body
    bindEvent(body, 'click', function (e) {
        // 所有 p 的点击都会冒泡到 body 上，因为 DOM 结构中 body 是 p 的上级节点，事件会沿着 DOM 树向上冒泡
        alert('取消')
    })

    var p1 = document.getElementById('p1')
    bindEvent(p1, 'click', function (e) {
        e.stopPropagation() // 阻止冒泡
        alert('激活')
    })
    ```
    - 事件代理

        [参考](https://juejin.im/book/5a8f9ddcf265da4e9f6fb959/section/5a8f9f1af265da4e777fbdef)

3. GET POST区别
    GEt
    ```
    1.GET是通过URL提交数据，因此GET可提交的数据量就跟URL所能达到的最大长度有直接关系。

    2.实际上HTTP协议对URL长度是没有限制的；限制URL长度大多数是浏览器或者服务器的配置参数
    ```
    [参考](https://www.zhihu.com/question/28586791/answer/145424285)
    ```
    GET历史参数保留在浏览器历史中。POST参数不会保存在浏览器历史中
    GET对数据长度有限制，当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。POST无限制。
    GET只允许 ASCII 字符。POST没有限制。也允许二进制数据。
    GET的数据在 URL 中对所有人都是可见的。POST的数据不会显示在 URL 中。
    GET能被缓存，POST不能缓存 。
    GET产生一个TCP数据包；POST产生两个TCP数据包。

    ```
        ```
        对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

        而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。

        也就是说，GET只需要汽车跑一趟就把货送到了，而POST得跑两趟，第一趟，先去和服务器打个招呼“嗨，我等下要送一批货来，你们打开门迎接我”，然后再回头把货送过去。
        1. GET与POST都有自己的语义，不能随便混用。

        2. 据研究，在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。

        3. 并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。
        ```
4. browserHistory与hashHistory
    ```
    browserHistory 需要 server 端支持。 而使用hashHistory的时候，
    因为 url 中 # 符号的存在，从 /#/ 到 /#/user/haishanh 浏览器并不会去发送一次 request
    react-router 自己根据 url 去 render 相应的模块。
    而使用 browserHistory 的时候，浏览器从 / 到 /user/haishanh 是会向 server 发送 request 的。所以 server 端是要做特殊配置的。
    ```
5. 一个页面最多并发多少个请求

    [浏览器允许的并发请求资源数是什么意思？ - 王納米的回答 - 知乎](    https://www.zhihu.com/question/20474326/answer/15225916)
    不同浏览器不一样，谷歌6个

6. http与https区别

    [参考](https://segmentfault.com/a/1190000015969377#articleHeader15)

    ```
    HTTPS = HTTP+加密+认证+完整性保护

    ```
    [参考](https://juejin.im/entry/58d7635e5c497d0057fae036)
    ```
    HTTPS和HTTP的区别主要如下：

    1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。

    2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。

    3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

    4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
    ```
