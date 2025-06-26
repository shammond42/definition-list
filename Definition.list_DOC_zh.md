## 插件功能

尽管定义列表（Definition list）不是Markdown的标准语法，但有许多分支采纳了这一语法。本插件同时吸收了[Extended Syntax](https://www.markdownguide.org/extended-syntax/#definition-lists)和[Pandoc](https://pandoc.org/MANUAL.html#definition-lists)中有关定义列表的语法，尤其是对波浪号`~`作为语法标记和缩进两格的支持。

## 插件用法

语法示例，注意语法标记与定义之间有一个英文空格，在条目和定义中可以使用斜体和高亮语法，见：
```
第一个条目
: 第一个定义

第二个条目
~ 第一个定义
~ 带有_斜体_和[链接](https://example.com)的第二个定义

带有_斜体_和==高亮==的第三个条目
  : 带有缩进的第一个定义
```

对于之间隔有空行的多定义写法，仅在实时预览中支持
```
This is an example term
: this is the first definition

: this is another definition.
```

如果你启用了`系统设置→编辑器→严格换行`，则在每行结束时需要加一个`\`
```
Definition term \
: Definition definition
```

目前不支持的定义列表写法有：
- 多行条目
- 多行/段定义
- 定义内嵌套定义
- 定义内嵌套有无序列表

由于定义列表并非Markdown标准语法，没有一个主题对其进行了适配，本插件为此添加了一些装饰选项，但仍建议用CSS来适配所用主题。