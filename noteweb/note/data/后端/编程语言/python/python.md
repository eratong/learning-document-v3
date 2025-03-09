# python

一种解释型的、面向对象的、移植性强的高级程序设计语言\
解释性：不需要编译成二进制代码，可以直接从源码运行\
面向对象：python既支持面向过程编程，也支持面向对象编程\
移植性：可以在不同平台进行开发\
高级语言：无序考虑如何管理程序使用的内存一类的底层细节

### Anaconda
方便python包管理和环境管理软件\
可以很方便的解决多版本python并存、切换以及各种第三方包安装问题




asyncio

https://blog.csdn.net/longlong6682/article/details/106501654/



## 安装
mac 
下载地址 https://www.python.org/downloads/macos/

执行命令  echo "alias python=/usr/bin/python3" >> ~/.zshrc


pycharm下载地址
https://www.jetbrains.com/zh-cn/pycharm/download/?section=mac


## 开发工具
### vscode开发 
格式化文档

安装Black Formatter插件

setting.json文件
```
"[python]": {
        "editor.defaultFormatter": "ms-python.black-formatter",
        "editor.formatOnSave": true
    },
```

参考文档 
【新版VSCode格式化Python文件的方法】https://blog.csdn.net/weixin_42783201/article/details/142139940

### jupyter notebook
[jupyter官方文档](https://jupyter.org/)<https://jupyter.org/>

特点：\
允许把代码写入独立cell中，单独执行，用户可以单独测试特定代码块，无需从头开始执行代码\
基于web框架进行交互式开发


## 工具包
### Pandas
Pandas: 强大的 Python 数据分析支持库

```bash
python3 -V

python3 -m ensurepip --upgrade

pip3 -V

pip3 install pandas

# 使用Excel相关包
pip3 install openpyxl

```

## 自动化工具
### Selenium
最成熟的 Web 自动化工具，支持多浏览器（Chrome、Firefox、Edge 等）
```bash
# 安装
pip3 install selenium

# 查看
pip3 show selenium 
```

### Playwright
微软出品，支持多浏览器（Chromium、Firefox、WebKit），自动管理浏览器生命周期，性能更优。

自动化操作浏览器

```bash
## 会超时 安装不上 不好使  参考https://blog.csdn.net/Ktovoz/article/details/145262343
pip3 install playwright
## 使用清华镜像源（推荐国内用户）：
pip3 install playwright -i https://pypi.tuna.tsinghua.edu.cn/simple

# 安装 Playwright 测试浏览器
playwright install

```


## pytorch
PyTorch 是一个开源的机器学习库，主要用于进行计算机视觉（CV）、自然语言处理（NLP）、语音识别等领域的研究和开发。

PyTorch由 Facebook 的人工智能研究团队开发，并在机器学习和深度学习社区中广泛使用。

PyTorch 以其灵活性和易用性而闻名，特别适合于深度学习研究和开发。