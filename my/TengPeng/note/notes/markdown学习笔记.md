#            markdown学习笔记

Markdown 语法的简要规则：

总共六级标题，在井号后加一个空格，为一级标题，两个井号为二级标题，以此类推，这是最标准的 Markdown 语法。

# 一级标题

## 二级标题

在 Markdown 下，列表的显示只需要在文字前加上 - 或 * 即可变为无序列表，有序列表则直接在文字前加1. 2. 3. 符号要和文字之间加上一个字符的空格。

无序列表                                     有序列表

* 1                                               1. 1 

* 2                                                2. 2 

* 3                                                3. 3 

  ### 引用

  如果你需要引用一小段别处的句子，那么就要用引用的格式。

  > 这是引用的

  只需要在文本前加入 `>` 这种尖括号（大于号）即可

  ​

图片与链接

插入链接与插入图片的语法很像，区别在一个 !号

图片为:

![2345_image_file_copy_1](C:\Users\Administrator\Desktop\2345_image_file_copy_1.jpg)

![2345_image_file_copy_1]()





链接为：[]()

插入图片的地址需要图床，这里推荐围脖图床修复计划 与 CloudApp 的服务，生成URL地址即可。

粗体与斜体

Markdown 的粗体和斜体也非常简单，用两个 * 包含一段文本就是粗体的语法，用一个 * 包含一段文本就是斜体的语法。

**这里是粗体**  *这里是斜体* 

表格    可以直接点击paragraph里面的Table 还可以 

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

这种语法生成的表格如下：

| Tables        | Are           | Cool  |
| ------------- | ------------- | ----- |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      | $12   |
| zebra stripes | are neat      | $1    |

| tables | Are  | cool |
| ------ | ---- | ---- |
|        |      |      |

## 快捷键

- 加粗 `Ctrl + B`
- 斜体 `Ctrl + I`
- 引用 `Ctrl + Q`
- 插入链接 `Ctrl + L`
- 插入代码 `Ctrl + K`
- 插入图片 `Ctrl + G`
- 提升标题 `Ctrl + H`
- 有序列表 `Ctrl + O`
- 无序列表 `Ctrl + U`
- 横线 `Ctrl + R`
- 撤销 `Ctrl + Z`
- 重做 `Ctrl + Y`

# 为知笔记 Markdown 新手指南

2015-11-23  [产品与服务](http://www.wiz.cn/category/product)

## Markdown 是什么

> Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。它允许人们「使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档 」—— 维基百科

如果你看不懂以上维基百科对 Markdown 的定义，就当这段掐了没播。约翰·格鲁伯自己对Markdown的描述的重点也在于 「easy-to-read，easy-to-write」。

#### 那么到底 easy 在哪里呢？

虽然称作 「标记语言」，但简单理解 Markdown 就是在文本前增加符号来表示文本格式。你不需要关心标题多大号，列表缩进多少，是否对齐，只要使用了同一种符号标记，Markdown 已经帮你做好了排版。

无图无真相：

![img](http://cdn2.wiz.cn/wp-content/uploads/2015/11/wpid-c45f7c10dadd27170d57a8f485e0e28b_d391c3d6-1d8b-472f-ab79-f48c70e14d99.png)

### Markdown 的好处

1. **编辑，不用操心排版**你只需要把注意力放在内容上。笔者在用 Markdown 之前，打开word 先想想，标题用啥字体呢，几号字呢？不知不觉我的意志力就被消耗了。实际上所谓排版，不就是作者的思路以及内容的层级和结构么，在学会使用 Markdown 之后，几个简单的符号就把这些事儿搞定，样式还特别工整精美。
2. **修改，不用担心排版**想想那些你在同事之间改来改去的 word 文档吧，如果哪位童鞋从外部粘贴了一段带格式的文字，那么你再次打开文档时会发现整个人都不好了：格式被改的乱七八糟，还要重新调整。如果用 Markdown 群组笔记 ，想改哪里改哪里，根本不用担心格式，改完评论里直接 @TA，多轻松！

一句话来说，Markdown 是用最简单的方式，零排版成本，写出布局工整、阅读舒适的笔记。**减少干扰，降低成本，提高效率**，不管在什么设备上，看起来都是一个工整的样子。不仅自己阅读爽，分享给朋友也有面儿不是~

### 那些牛人都在用

阳志平在 2012 年就发博客推崇了一下 Markdown，但那篇文章虽解读深刻，但也略显极客，把Markdown 不仅能排版，能做流程图，还支持数学公式的特性介绍了一遍，连科技论文都要选择 Markdown 都涉猎到了。有兴趣阅读的童鞋可[点击这里](http://www.yangzhiping.com/tech/r-markdown-knitr.html)查看。

很多在线博客和内容社区都提供 Markdown 编辑器，不仅在阅读上带来了舒适、统一、美好的体验，每一个参与写作的人，也能够毫不费力地写出排版整齐的文章来。

## 如何在为知笔记上创建 Markdown 笔记

为知笔记所有客户端都支持 Markdown ，有两种方法可以创建 Markdown 笔记

- 第一种：在笔记标题后面加 .md ，编辑并保存后，即可看到渲染后的效果
- 第二种：在移动端直接创建 Markdown 笔记

编辑完成后，点击 「保存」 按钮，即可看到格式精美的笔记啦！

## 来个小技巧

不管我再怎么说 Markdown 的语法记忆负担小、简单，在最初你都会有点儿晕。在这里给大家分享个小技巧：

1. 最初只需要记住 `# 标题一`、`## 标题二`、`1. 第一点`、`* 这一点`，用这几个写写日志、需求文档、小文章，排版上足够了；
2. 逐渐的你发现有些文字需要重点指出，那么还可以使用 `**加粗**`、`*斜体*` 来对文字做重点说明；
3. 如果你是名程序员，那么可以用 ```` ` 把代码块包起来，渲染后可以关键字高亮，用 `>` 可以做引用 ；
4. 学生的话，就去了解一下 LaTex 吧，为知笔记 Markdown 支持 Mathjax 公式渲染哦~

## Markdown 格式标记符号说明

### 1. 标题

在行首插入 1 到 6个#，分别表示标题 1 到标题 6

```
# 这是标题1
## 这是标题1
###### 这是标题6

```

点击保存后的效果：

# 标题1

## 标题2

###### 标题6

### 2. 有序列表

在行首增加 `1.`、`2.`、`3.`，即数字和英文句点, 不要求数字一定要连续，可以都是`1.`

```
1. 有序列表
1. 有序列表
4. 有序列表

```

点击保存后的效果：

1. 有序列表
2. 有序列表
3. 有序列表

### 3. 无序列表

在行首增加 `*` 或 `-`

```
* 无序列表
* 无序列表

```

点击保存后的效果：

- 无序列表
- 无序列表

### 4. 插入图片

可直接粘贴图片，或将图片文件拖动到光标处。

也可以使用标准的Markdown语法，如：
` ![](http://cdn.wiz.cn/wp-content/uploads/2015/06/wiz_logo.png)`

### 5. 插入链接

1. `[描述](链接地址) ，例如：[为知笔记](http://www.wiz.cn)，注意要使用英文符号`

点击保存后的效果：
[为知笔记](http://www.wiz.cn)

### 6. 粗体、斜体、删除线

粗体：在文字前后添加 `**` (注意符号与文字间不要有空格）
斜体：在文字前后添加 `*`
删除线：在文字前后添加 `~~`

1. `**粗体**`
2. `*斜体*`
3. `~~删除线~~`

保存后的效果：

**粗体**
*斜体*
~~删除线~~

### 7. 引用

在文字前 添加 `>`

点击保存后的效果：

> 如果你无法简洁的表达你的想法，那只说明你还不够了解它。 -- 阿尔伯特·爱因斯坦

### 8. 表格

1. `| 为知笔记|更新 | 版本 | `
2. `|------------|-----------|--------| `
3. `| WizNote | Markdown| Latest |`

点击保存后的效果：

| 为知笔记    | 更新       | 版本     |
| ------- | -------- | ------ |
| WizNote | Markdown | Latest |

### 9. 代码

在代码前后增加 三个反单引号：`````

```
​```
int i = 0; i = 1; 
for (int i = 0; i < 100; i++)
{
      printf("hello markdown!\n");
}
​```

```

保存后的效果：

![img](http://cdn2.wiz.cn/wp-content/uploads/2016/02/24ffa42aad4a399a2d3d5675de0e8ea9.png)

如果需要指定语言， 在开头的``` 后紧跟具体语言，如: ```java

### 10. 目录

在任何你想要展示Markdown 笔记目录的地方，添加 `[TOC] `， 在阅读模式下，标题1~6样式的内容会被提取出来作为目录，相当于大纲功能。

例如：

[TOC]

\###Markdown 是什么

\####Markdown 的好处

点击保存后的效果：

![img](http://cdn2.wiz.cn/wp-content/uploads/2015/11/QQ20151123-2.png)

### 11. Mathjax 公式

1. `可以创建行内公式，例如：$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ `
2. `或者块级公式，`
3. `$$ x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$`

点击保存后的效果：

![img](http://cdn2.wiz.cn/wp-content/uploads/2016/02/c3dd8cb47ba6fa86cdeb005f10c324d6.png)

### 12. 流程图

\```flow
st=>start: Start
e=>end: End
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes or No?
io=>inputoutput: catch something...
st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
\```

保存后效果：

![img](http://cdn2.wiz.cn/wp-content/uploads/2015/11/QQ20151123-0.png)

注意：
1) 关键词（start、end、operation、subroutine、condition和inputoutput）后的冒号后要紧跟一个空格。
2) 使用->来连接两个元素，对于condition类型，有yes和no两个分支，如示例中的cond(yes)和cond(no)。

更多关于流程图的语法说明：[http://adrai.github.io/flowchart.js/](http://adrai.github.io/flowchart.js/)

### 13. 时序图

\```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
\```
保存后效果：

![img](http://cdn2.wiz.cn/wp-content/uploads/2015/11/QQ20151123-1.png)

更多关于时序图的语法说明：[http://bramp.github.io/js-sequence-diagrams/](http://bramp.github.io/js-sequence-diagrams/)

### 14. 脚注

在要添加注释的词语后面增加 `[^1]` ,结尾加入`[^1]：空格 注释内容`

```
hello[^1]
[^1]: hi

```

点击保存后的效果：
[![脚注](http://cdn2.wiz.cn/wp-content/uploads/2015/11/%E8%84%9A%E6%B3%A8.png)](http://cdn2.wiz.cn/wp-content/uploads/2015/11/%E8%84%9A%E6%B3%A8.png)

 

欢迎到[论坛](http://tieba.baidu.com/f?kw=%E4%B8%BA%E7%9F%A5%E7%AC%94%E8%AE%B0&ie=utf-8)发帖讨论