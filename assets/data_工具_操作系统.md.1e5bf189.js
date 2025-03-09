import{_ as a,o as e,c as s,X as n}from"./chunks/framework.9bc23fa4.js";const m=JSON.parse('{"title":"操作系统","description":"","frontmatter":{},"headers":[],"relativePath":"data/工具/操作系统.md","filePath":"data/工具/操作系统.md","lastUpdated":null}'),l={name:"data/工具/操作系统.md"},o=n(`<h1 id="操作系统" tabindex="-1">操作系统 <a class="header-anchor" href="#操作系统" aria-label="Permalink to &quot;操作系统&quot;">​</a></h1><h2 id="mac" tabindex="-1">mac <a class="header-anchor" href="#mac" aria-label="Permalink to &quot;mac&quot;">​</a></h2><h3 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h3><blockquote><p>navicat 侧边栏 ddl 查看</p><blockquote><p>command+2</p></blockquote><p>强制刷新</p><blockquote><p>command+shift+R</p></blockquote><p>截屏 mac自带的截屏 可以固定在屏幕上</p><blockquote><p>command+shift+5</p></blockquote><p>终端 control+u 清除当前行</p></blockquote><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><p>端口占用</p><p>停止进程</p><p>压缩解压rar 安装 <a href="https://www.rarlab.com/download.htm" target="_blank" rel="noreferrer">https://www.rarlab.com/download.htm</a> 选择 RAR 7.00 beta 2 for macOS x64 # 安装rar命令 sudo install -c -o $USER rar /usr/local/bin/ # 安装unrar命令 sudo install -c -o $USER unrar /usr/local/bin/ # 解压到当前目录 unrar x tong.rar</p><h3 id="brew命令" tabindex="-1">brew命令 <a class="header-anchor" href="#brew命令" aria-label="Permalink to &quot;brew命令&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">brew cleanup</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 卸载docker for mac</span></span>
<span class="line"><span style="color:#A6ACCD;">brew uninstall --cask docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装docker for mac</span></span>
<span class="line"><span style="color:#A6ACCD;">brew install --cask docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ollama --version  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ollama run deepseek-r1:1.5b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ollama run deepseek-r1:7b</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull ghcr.io/open-webui/open-webui:main</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># docker 访问宿主机127.0.0.1用host.docker.internal</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=http://host.docker.internal:11434 -v open-webui:/Users/xyt/Desktop/tong/webui/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main</span></span></code></pre></div><h2 id="window" tabindex="-1">window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;window&quot;">​</a></h2><h3 id="快捷键-1" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键-1" aria-label="Permalink to &quot;快捷键&quot;">​</a></h3><h3 id="常用命令-1" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令-1" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><h2 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;linux&quot;">​</a></h2><h3 id="常用命令-2" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令-2" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><p>在vim的普通模式下键入“ggdG”即可删除其中全部内容。</p><p>说明：</p><p>gg：光标跳转到该文件的行首； dG：删除光标行及其以下行的全部内容。（注：d为删除，G为光标跳转到末尾行）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">安装tree命令 查看目录树状结构</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install tree -y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-bash-4.2$ tree -L 1 -d /var/lib/postgresql/data</span></span></code></pre></div><h3 id="centos" tabindex="-1">centos <a class="header-anchor" href="#centos" aria-label="Permalink to &quot;centos&quot;">​</a></h3><p>使用yum、dnf</p><p>安装wget</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"></span></code></pre></div><p>安装yum</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"></span></code></pre></div><p>安装vim</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"></span></code></pre></div><h3 id="ubuntu" tabindex="-1">ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to &quot;ubuntu&quot;">​</a></h3><p>使用apt-get</p><p>安装rpm</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rpm</span></span></code></pre></div><h2 id="初始化常用软件" tabindex="-1">初始化常用软件 <a class="header-anchor" href="#初始化常用软件" aria-label="Permalink to &quot;初始化常用软件&quot;">​</a></h2><p>工具</p><blockquote><pre><code>1、cmder
2、C盘清理 SpaceSniffer
3、postman、apifox
4、sublime
5、editplus
6、notepad
7、截图录屏 fastStone capture portable
8、xmind
</code></pre></blockquote><p>linux相关</p><blockquote><pre><code>1、xhsell、xftp
2、secureCRT 、secureFX
3、FinalShell
</code></pre></blockquote><p>数据库相关</p><blockquote><pre><code>1、redis desktop manager
2、navicat
</code></pre></blockquote><p>java相关</p><blockquote><pre><code>1、maven
2、jdk
3、intellj
</code></pre></blockquote><p>测试相关</p><blockquote><pre><code>1、postman
2、Charles 抓包
</code></pre></blockquote><h2 id="mac-1" tabindex="-1">mac <a class="header-anchor" href="#mac-1" aria-label="Permalink to &quot;mac&quot;">​</a></h2><h3 id="配置gradle命令" tabindex="-1">配置gradle命令 <a class="header-anchor" href="#配置gradle命令" aria-label="Permalink to &quot;配置gradle命令&quot;">​</a></h3><p>open .bash_profile</p><p>GRADLE_HOME=/Users/xyt/Desktop/fm/gradle/gradle-5.6.4 export GRADLE_HOME export PATH=$PATH:$GRADLE_HOME/bin</p><p>source .bash_profile</p><p>当mac机器上安装了zsh后 .bash_profile 文件中的环境变量就无法起到作用。 接下来的解决方案： (1) cd ~ (2) open .zshrc (3) 在.zshrc文件末尾增加.bash_profile的引用： source ~/.bash_profile</p><h3 id="jdk版本修改" tabindex="-1">jdk版本修改 <a class="header-anchor" href="#jdk版本修改" aria-label="Permalink to &quot;jdk版本修改&quot;">​</a></h3><p>查看安装的所有java版本</p><p>/usr/libexec/java_home -V</p><p>配置jdk环境变量 open .zshrc</p><p>JAVA_HOME=Users/xyt/Library/Java/JavaVirtualMachines/corretto-11.0.22/Contents/Home PATH=$JAVA_HOME/bin:$PATH:. CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:. export JAVA_HOME export PATH export CLASSPATH</p><p>source ~/.bash_profile</p>`,54),p=[o];function t(r,c,i,d,h,u){return e(),s("div",null,p)}const A=a(l,[["render",t]]);export{m as __pageData,A as default};
