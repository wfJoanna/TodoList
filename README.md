# TodoList
一个todo list，即待办事项列表



## TODO：

1. 编辑任务
2. 搜索任务
3. 任务模板
4. 任务时间
5. 响应式布局
6. 可以参考一下<https://www.cnblogs.com/EricZLin/p/9369260.html>



## 效果演示：[demo](https://wfjoanna.github.io/TodoList/)



## 涉及技术：

- html
- css
- js
- vue（vue 2.x 以及 @vue/cli 4.x 以及 vuex 3.x）
- element-ui 2.15.0



## 描述：

就是一个简单的 Todo List

功能有：

1. 输入添加任务
2. 点击即完成
3. 点击垃圾桶图标进行删除
4. 所有任务本地持久化存储，即localStorage
5. 可以过滤
6. 可以一键完成全部、一键删除所有已完成任务

整体结构、格式都尽量参照了我实习公司的vue项目



## 开发信息：

- 第一段开发时间：2021.2.1~2021.2.2、2021.2.4~2021.2.5
- 遇到的困难：
  - 不知道如何部署一个vue项目到github pages上
  - 网上好多教程都是旧版的vue-cli，我就迷茫了一小会儿。后来发现没有太大区别啦，反正我就是“vue create xxx”，手动选择配置后把该删的删掉，替换成我自己的代码就行了
  - 在删除了一项item之后，下面的item会向上平移，同时会“继承”原地的样式，然而数据又是对的 :cold_sweat: 初步猜测是v-for设置的key的问题，v-for更新已渲染过的元素列表默认是采用“就地复用”策略（其实我不是很懂，但经过测试大概好像是key相同的就会复用data里的数据，就明明我传给子组件的itemCompleted已经变了，但是data里的completedData没变，所以我给props里的itemCompleted加了监听）
  - 调样式真的好费时间（有一个收获，就是知道了display设置成flex的时候，其实就包含了block了。然后就是element ui真好用！）
  - 为了更加熟悉vuex，我还是把项目改成了vuex版的了，其实这个项目简单到不是很需要vuex，但我还是用了。改的过程很麻烦很头疼，但是改完之后也就这么回事，挺简单挺方便的。vuex的格式保持了和公司项目一致
  - 当我过滤之后，我toggle和delete都变得不正常了，经过不断尝试多种情况和操作之后，终于找到了原因！因为我v-for循环的是过滤后的列表，过滤之后index也变化了，我以为原来第八项的index还是7，结果过滤之后index已经比7小了，我toggle和delete的根本不是这一项
  - 循环、符合条件的就删除，我傻乎乎的直接for...in获取index，然后符合条件的就splice。结果发现根本删不完，因为splice之后index就变了呀！for...in根本循环不完所有的index