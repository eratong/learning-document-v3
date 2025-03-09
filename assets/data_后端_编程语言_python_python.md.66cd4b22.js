import{_ as a,o as s,c as n,X as e}from"./chunks/framework.9bc23fa4.js";const u=JSON.parse('{"title":"python","description":"","frontmatter":{},"headers":[],"relativePath":"data/后端/编程语言/python/python.md","filePath":"data/后端/编程语言/python/python.md","lastUpdated":1720420715000}'),l={name:"data/后端/编程语言/python/python.md"},o=e(`<h1 id="python" tabindex="-1">python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;python&quot;">​</a></h1><p>一种解释型的、面向对象的、移植性强的高级程序设计语言<br> 解释性：不需要编译成二进制代码，可以直接从源码运行<br> 面向对象：python既支持面向过程编程，也支持面向对象编程<br> 移植性：可以在不同平台进行开发<br> 高级语言：无序考虑如何管理程序使用的内存一类的底层细节</p><h3 id="anaconda" tabindex="-1">Anaconda <a class="header-anchor" href="#anaconda" aria-label="Permalink to &quot;Anaconda&quot;">​</a></h3><p>方便python包管理和环境管理软件<br> 可以很方便的解决多版本python并存、切换以及各种第三方包安装问题</p><p>asyncio</p><p><a href="https://blog.csdn.net/longlong6682/article/details/106501654/" target="_blank" rel="noreferrer">https://blog.csdn.net/longlong6682/article/details/106501654/</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>mac 下载地址 <a href="https://www.python.org/downloads/macos/" target="_blank" rel="noreferrer">https://www.python.org/downloads/macos/</a></p><p>执行命令 echo &quot;alias python=/usr/bin/python3&quot; &gt;&gt; ~/.zshrc</p><p>pycharm下载地址 <a href="https://www.jetbrains.com/zh-cn/pycharm/download/?section=mac" target="_blank" rel="noreferrer">https://www.jetbrains.com/zh-cn/pycharm/download/?section=mac</a></p><h2 id="开发工具" tabindex="-1">开发工具 <a class="header-anchor" href="#开发工具" aria-label="Permalink to &quot;开发工具&quot;">​</a></h2><h3 id="vscode开发" tabindex="-1">vscode开发 <a class="header-anchor" href="#vscode开发" aria-label="Permalink to &quot;vscode开发&quot;">​</a></h3><p>格式化文档</p><p>安装Black Formatter插件</p><p>setting.json文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;[python]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;editor.defaultFormatter&quot;: &quot;ms-python.black-formatter&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;editor.formatOnSave&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span></code></pre></div><p>参考文档 【新版VSCode格式化Python文件的方法】<a href="https://blog.csdn.net/weixin_42783201/article/details/142139940" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_42783201/article/details/142139940</a></p><h3 id="jupyter-notebook" tabindex="-1">jupyter notebook <a class="header-anchor" href="#jupyter-notebook" aria-label="Permalink to &quot;jupyter notebook&quot;">​</a></h3><p><a href="https://jupyter.org/" target="_blank" rel="noreferrer">jupyter官方文档</a><a href="https://jupyter.org/" target="_blank" rel="noreferrer">https://jupyter.org/</a></p><p>特点：<br> 允许把代码写入独立cell中，单独执行，用户可以单独测试特定代码块，无需从头开始执行代码<br> 基于web框架进行交互式开发</p><h2 id="工具包" tabindex="-1">工具包 <a class="header-anchor" href="#工具包" aria-label="Permalink to &quot;工具包&quot;">​</a></h2><h3 id="pandas" tabindex="-1">Pandas <a class="header-anchor" href="#pandas" aria-label="Permalink to &quot;Pandas&quot;">​</a></h3><p>Pandas: 强大的 Python 数据分析支持库</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">python3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ensurepip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-V</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pandas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用Excel相关包</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openpyxl</span></span></code></pre></div><h2 id="自动化工具" tabindex="-1">自动化工具 <a class="header-anchor" href="#自动化工具" aria-label="Permalink to &quot;自动化工具&quot;">​</a></h2><h3 id="selenium" tabindex="-1">Selenium <a class="header-anchor" href="#selenium" aria-label="Permalink to &quot;Selenium&quot;">​</a></h3><p>最成熟的 Web 自动化工具，支持多浏览器（Chrome、Firefox、Edge 等）</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">selenium</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">selenium</span></span></code></pre></div><h3 id="playwright" tabindex="-1">Playwright <a class="header-anchor" href="#playwright" aria-label="Permalink to &quot;Playwright&quot;">​</a></h3><p>微软出品，支持多浏览器（Chromium、Firefox、WebKit），自动管理浏览器生命周期，性能更优。</p><p>自动化操作浏览器</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 会超时 安装不上 不好使  参考https://blog.csdn.net/Ktovoz/article/details/145262343</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">playwright</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 使用清华镜像源（推荐国内用户）：</span></span>
<span class="line"><span style="color:#FFCB6B;">pip3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">playwright</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装 Playwright 测试浏览器</span></span>
<span class="line"><span style="color:#FFCB6B;">playwright</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span></code></pre></div><h2 id="pytorch" tabindex="-1">pytorch <a class="header-anchor" href="#pytorch" aria-label="Permalink to &quot;pytorch&quot;">​</a></h2><p>PyTorch 是一个开源的机器学习库，主要用于进行计算机视觉（CV）、自然语言处理（NLP）、语音识别等领域的研究和开发。</p><p>PyTorch由 Facebook 的人工智能研究团队开发，并在机器学习和深度学习社区中广泛使用。</p><p>PyTorch 以其灵活性和易用性而闻名，特别适合于深度学习研究和开发。</p>`,36),t=[o];function p(r,c,i,h,y,d){return s(),n("div",null,t)}const b=a(l,[["render",p]]);export{u as __pageData,b as default};
