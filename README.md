# README
# 向下兼容（pc-mobile）或向上（mobile-pc）兼容开发模板
####  优点
  1. 自动转换 UI框架中的单位。 
  #### mobile-pc
  1. 配合media媒体查询设置root fontSize适配不同分辨率的大小以及限制最大宽度。

  #### pc-mobile
  1. 设置最小宽度居中，超出部分滚动条。
  1. 适配比设计稿更大的屏幕时把root fontSize设置为更大即可。

####  缺点
  1. 所有设置转换的单位都会被转换掉，无法设置某些样式的单位不被转换。


# web3模板/web2模板
  - web2项目删掉 一下web3依赖
  - @infte/web3modal-react 插件
  - models/appHashState文件
  - models/index/ 下 
    - Web3Modal 配置
  - hooks_web3 文件
  - config/ 
    - network.chains.*list*.json 文件
    - index.js/ 下 @deprecated web3Modal 相关配置

### 不使用 @infte/web3modal-react 链接钱包插件 删除相关配置即可


# commit 保存代码规范 type：用于说明 commit 的类别，规定为如下几种
1. feat：新增功能；
2. fix：修复 bug；
3. docs：修改文档；
4. refactor：代码重构，未新增任何功能和修复任何 bug；
5. build：改变构建流程，新增依赖库、工具等（例如 webpack 修改）；
6. style：仅仅修改了空格、缩进等，不改变代码逻辑；
7. perf：改善性能和体现的修改；
8. chore：非 src 和 test 的修改；
9. test：测试用例的修改；
10. ci：自动化流程配置修改；
11. revert：回滚到上一个版本；

# 使用义化标签
1. < h1>~< h6>标签：标题标签，h1 等级最高，h6 等级最低
2. header 元素：用于定义页面的介绍展示区域，通常包括网站 1. logo、主导航、全站链接以及搜索框
3. nav 元素：定义页面的导航链接部分区域
4. main 元素：定义页面的主要内容，一个页面只能使用一次。
5. article 元素：定义页面独立的内容，它可以有自己的 1. header、footer、sections 等
6. section 元素：元素用于标记文档的各个部分，例如长表单文章的章节或主要部分
7. aside 元素：一般用于侧边栏
8. footer 元素：文档的底部信息
9. small 元素：呈现小号字体效果
10. strong 元素：用于强调文本

