# hexo-theme-yilia

这是 MonoLogueChi 维护的 [yilia](https://github.com/litten/hexo-theme-yilia) 分支

效果：

[叉叉白博客](https://blog.xxwhite.com)

手机效果  
![phone](https://i.loli.net/2020/05/27/UkqvTwIMszRZ3Ou.png)

—————————————————————

## 一、相对原主题的修改

相对 (原主题)[https://github.com/litten/hexo-theme-yilia] 修改部分比较多，下面列举的不一定全面。

### 维护修复

- 更新 webpack 版本，舍弃对 IE 的完全支持
- 修复主题内错误
- 增大打赏图片大小

### 新增功能

- 支持 Valine 和 MiniValine 评论（其他评论没有继续维护，不一定能用）
- 修改 js 加载方式，提高网页相应速度
- 增加 pangu.js
- 增加备案地址，增加文章阅读统计，增加文章协议，增加文章源码查看功能
- 支持 npm 安装方式

### 删减模块

- 移除统计模块
- 移除部分评论系统

## 二、注意

- IE11 支持不完全，包括但不限于侧栏无法使用，灯箱无法使用。
- 分享组件没有修复，因为我不用

## 三、使用

~~推荐使用子模块安装，可以参考[这篇文章](https://blog.xxwhite.com/2020/blog-ci.html)。~~

推荐使用 `npm` 安装

### 安装

```
npm install hexo-theme-yilic
```

### 配置

\_config.yml 下

```yaml _config.yml
theme: yilic
```

主题配置文件，新建文件 `_config.yilic.yml`

### 更新

按照 npm 方式更新即可

## 四、配置

主题配置文件在主目录下的`_config.yml`，请根据自己需要修改使用。
完整配置例子，可以参考[我的博客](https://github.com/MonoLogueChi/blog.xxwhite.com)

```
# Header

menu:
  主页: "/"
  搞机: "/tags/搞机/"
  留言: "/MessageBoard/"
  关于: "/aboutme/"

# SubNav
subnav:
  #github: '#'
  #weibo: "#"
  #zhihu: "#"
  #qq: "#"
  #weixin: '#'
  #jianshu: "#"
  #douban: "#"
  #segmentfault: "#"
  #bilibili: '#'
  #acfun: "#"
  #mail: '#'
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"
  rss: "/atom.xml"

rss: "/atom.xml"

# 是否需要修改 root 路径
# 如果您的网站存放在子目录中，例如 http://yoursite.com/blog，
# 请将您的 url 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
root:

# Content

# 文章太长，截断按钮文字
excerpt_link: ""
# 文章卡片右下角常驻链接，不需要请设置为false
show_all_link: "展开全文"
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false
fancybox: true

# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: "请作者吃辣条"
# 支付宝二维码图片地址，跟你设置头像的方式一样。比如：/assets/img/alipay.jpg
alipay: ""
# 微信二维码图片地址
weixin: ""

# 版权声明type设定：0-关闭版权声明； 1-文章对应的md文件里有copyright: true属性，才有版权声明； 2-所有copyright不为false的文章均有版权声明
copyright_type: 2

# 备案信息，没有请留空
beian:

# 又拍云开发者计划图片链接，没有请留空
upyun:

# 目录
# 目录设定：0-不显示目录； 1-文章对应的md文件里有toc:true属性，才有目录； 2-所有文章均显示目录
toc: 2
# 根据自己的习惯来设置，如果你的目录标题习惯有标号，置为true即可隐藏hexo重复的序号；否则置为false
toc_hide_index: false
# 目录为空时的提示
toc_empty_wording: "目录，不存在的…"

# 是否有快速回到顶部的按钮
top: true

# Miscellaneous 百度统计和谷歌统计，站点标识
#baidu_analytics: ''
#google_analytics: ''

# 站点favicon
favicon: ""

#你的头像url
avatar: ""

#是否开启分享，如果不需要建议不要开启
share_jia: false

#评论：1、多说；2、网易云跟帖；3、畅言；4、Disqus；5、Gitment；6、valine
#不需要使用某项，直接设置值为false，或注释掉
#具体请参考wiki：https://github.com/litten/hexo-theme-yilia/wiki/

#1、多说
duoshuo: false

#2、网易云跟帖
wangyiyun: false

#3、畅言
#changyan_appid:
#changyan_conf:

#4、Disqus 在hexo根目录的config里也有disqus_shortname字段，优先使用yilia的
disqus: false

#5、Gitment
gitment_owner: false #你的 GitHub ID
gitment_repo: "" #存储评论的 repo
gitment_oauth:
  client_id: "" #client ID
  client_secret: "" #client secret

#6、Valine https://valine.js.org
valine:
  appId: "" #Leancloud应用的appId
  appKey: "" #Leancloud应用的appKey
  # mini: false  #此项为true时将启用MiniValine，Valine和MiniValine的配置项请自行查看文档，示例里不存在的配置项也可以写在这里
  # verify: false #验证码
  # notify: false #评论回复提醒
  # avatar: "" #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
  # avatar_cdn: "" #头像CDN
  # placeholder: "友情提醒，留下正确的邮箱地址可以第一时间获取评论反馈" #评论框占位符
  # pageSize: 12 #评论分页
  # visitor: true #阅读统计
  # recordIP: true #记录IP
  # serverURLs: ""
  # version: latest #例如 latest 1.4.5
  # adminEmailMd5:	a70ed099981735ebdf3d7c71dc507559
  # math: false
#  emojiCDN: https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/
#  emojiMaps:
#    smile: e3/2018new_weixioa02_org.png
#    lovely: 09/2018new_keai_org.png



# 样式定制 - 一般不需要修改，除非有很强的定制欲望…
style:
  # 头像上面的背景颜色
  header: "#4d4d4d"
  # 右滑板块背景
  slider: "linear-gradient(200deg,#a0cfe4,#e8c37e)"

# slider的设置
slider:
  # 是否默认展开tags板块
  showTags: false

# MarkDown文件下载地址,如：http://md.xxwhite.com，以后会写文章教怎么上传原文，不会请留空
mdhost:

# 网站建站日期
wbd:
  y: 2015
  m: 03
  d: 08

#pangu.js 用于自动加空格
pangu: true

# 智能菜单
# 如不需要，将该对应项置为false
# 比如
#smart_menu:
#  friends: false
smart_menu:
  innerArchive: "所有文章"
  friends: "友链"
  aboutme: "关于本站"

friends:
  叉叉白: "https://www.xxwhite.com/"
  大姐姐的博客Minemine: "https://minemine.cc/"
  酷安基佬: "http://socoolapk.top/"
  Se7en: "https://www.se7ensec.cn/"
  姬长信: "https://blog.isoyu.com/"
  staunchkai: "http://staunchkai.com/"
  随遇而安: "https://www.iszy.me"
  2401的晚秋咖啡: "https://zsh2401.top/"

aboutme: 叉叉白 一个小白搞机的记事本
```
