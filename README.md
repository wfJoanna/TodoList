# TodoList
一个todo list，即待办事项列表



## TODO：

1. 丰富样式
2. 添加功能
3. 可以参考一下<https://www.cnblogs.com/EricZLin/p/9369260.html>



## 效果演示：[demo](https://wfjoanna.github.io/TodoList/)



## 涉及技术：

- html
- css
- js
- vue（vue 2.x 以及 vue-cli 3.x）
- element ui



## 描述：

就是一个简单的Todo List，目前只有最简单的功能，等之后慢慢完善。目前的功能就是输入后添加、点击即删除，会存储在本地，即localStorage

整体结构、格式都尽量参照了我实习公司的vue项目



## 开发信息：

- 第一段开发时间：2021.2.1~2021.2.2
- 遇到的困难：
  - 不知道如何部署一个vue项目到github pages上
  - 网上好多教程都是旧版的vue-cli，我就迷茫了一小会儿。后来发现没有太大区别啦，反正我就是“vue create xxx”，手动选择配置后把该删的删掉，替换成我自己的代码就行了
  - 在删除了一项item之后，下面的item会向上平移，同时会“继承”原地的样式，然而数据又是对的 :cold_sweat: 初步猜测是v-for设置的key的问题，v-for更新已渲染过的元素列表默认是采用“就地复用”策略（其实我不是很懂，但经过测试大概好像是key相同的就会复用data里的数据，就明明我传给子组件的itemCompleted已经变了，但是data里的completedData没变，所以我给props里的itemCompleted加了监听）
  - 调样式真的好费时间（有一个收获，就是知道了display设置成flex的时候，其实就包含了block了。然后就是element ui真好用！）