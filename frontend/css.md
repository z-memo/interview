## css
1. css3新特性有哪些？
2. 页面布局方式有哪些？
3. 用过flex吗？都有哪些属性？

    flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
    ```
    flex:1====>
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
    flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    ```
4. 清除浮动有哪些方法，说说原理？
    [参考](https://juejin.im/post/59e7190bf265da4307025d91)
    ```
    清除浮动的影响，一般使用的样式如下，统称clearfix代码。所有 float 元素的父容器，一般情况下都应该加clearfix这个 class。

    clearfix，即父级元素的最后，添加了一个:after伪元素，
    通过清除伪元素的浮动，达到撑起父元素高度的目的。
    注意到该伪元素的display值为block，
    即，它是一个不可见的块级元素
    （有的地方使用table，因为table也是一个块级元素）。

    .clearfix:after {
        content: '';
        display: table;// block
        clear: both;
    }
    .clearfix {
        *zoom: 1; /* 兼容 IE 低版本 */
    }
    <div class="clearfix">
        <img src="image/1.png" style="float: left"/>
        <img src="image/2.png" style="float: left"/>
    </div>
    ```
5. 如何解决外边距合并的问题，说说原理？
6. 盒模型是怎么样的？
    ```
    padding border和margin，即内边距、边框和外边距。它们三者就构成了一个“盒子”

    在盒子模型中，我们设置的宽度都是内容宽度，
    不是整个盒子的宽度。
    而整个盒子的宽度是：（内容宽度 + border宽度 + padding宽度 + margin宽度）之和
    为盒子指定样式：box-sizing:border-box即可解决这个问题
    ```
7. 如何实现垂直居中？
8. 常用的选择器有哪些？权重如何？
    ```
    代表内联样式，如style="xxx"，权值为 1000；
    代表 ID 选择器，如#content，权值为 100；
    代表类、伪类和属性选择器，如.content、:hover、[attribute]，权值为 10；
    代表元素选择器和伪元素选择器，如div、p，权值为 1。
    ```
9.  position 定位

    [参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
    1. relative
    2. absolute
    3. fixed
    4. static 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
    5. sticky，目前处于实验阶段
10. margin重叠

    [参考](https://juejin.im/entry/59c3be3e6fb9a00a571d39e4)

    [参考](https://juejin.im/post/5b1bc2986fb9a01e856426c6

    ```
    两个或多个块级盒子的垂直相邻边界会重合。结果的边界宽度是相邻边界宽度中最大的值。
    如果出现负边界，则在最大的正边界中减去绝对值最大的负边界。
    如果没有正边界，则从零中减去绝对值最大的负边界。注意：相邻的盒子可能并非是由父子关系或同胞关系的元素生成
    ```
11. padding %

    ```
    % 规定基于父元素的宽度的百分比的内边距。
    ```
12. 使用css画三角形

    [实心三角形](https://segmentfault.com/a/1190000005715074)

    [边框三角形](https://www.jianshu.com/p/e26df9cedbfa)
