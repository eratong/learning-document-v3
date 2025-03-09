import{_ as s,o as a,c as n,X as l}from"./chunks/framework.9bc23fa4.js";const e="/learning-document-v3/assets/image-20221108164141451.c451646f.png",p="/learning-document-v3/assets/image1.6ea5e8be.png",t="/learning-document-v3/assets/image2.ce2c980e.png",u=JSON.parse('{"title":"git","description":"","frontmatter":{},"headers":[],"relativePath":"data/工具/代码管理/git.md","filePath":"data/工具/代码管理/git.md","lastUpdated":null}'),o={name:"data/工具/代码管理/git.md"},c=l(`<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h1><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><h3 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git init 创建本地版本库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin https://github.com/eratong/tongplay.git  本地添加远程库</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch 查看本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -r  查看远端分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch master  创建本地master分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master 切换到master分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit 要先commit 才能推送</span></span>
<span class="line"><span style="color:#A6ACCD;">git push orgin master 本地master推送到远端  并创建远端master分支</span></span></code></pre></div><h3 id="部分代码合并到另一个分支" tabindex="-1">部分代码合并到另一个分支 <a class="header-anchor" href="#部分代码合并到另一个分支" aria-label="Permalink to &quot;部分代码合并到另一个分支&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 切换到master分支</span></span>
<span class="line"><span style="color:#A6ACCD;"># 下面这个命令加上 develop分支的提交号</span></span>
<span class="line"><span style="color:#A6ACCD;">git cherry-pick 20d5f7213e9c21dec7461c5f7326012bb134451f</span></span>
<span class="line"><span style="color:#A6ACCD;"># push一下代码</span></span></code></pre></div><p><img src="`+e+`" alt="image-20221108164141451"></p><h3 id="撤回commit" tabindex="-1">撤回commit <a class="header-anchor" href="#撤回commit" aria-label="Permalink to &quot;撤回commit&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 保留修改的代码</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --soft HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;"># 原来修改的代码也没了</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD^</span></span></code></pre></div><h3 id="撤回push" tabindex="-1">撤回push <a class="header-anchor" href="#撤回push" aria-label="Permalink to &quot;撤回push&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查询提交日志</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#A6ACCD;"># 回退到指定的版本，版本是前五位,完整的也行</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard 1c12ec4271bc98c267c627380af345473ec56d55</span></span>
<span class="line"><span style="color:#A6ACCD;"># 将当前版本push上去</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin 分支名 --force    </span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f origin develop  </span></span>
<span class="line"><span style="color:#A6ACCD;">执行完远端git提交记录就会撤回并消失</span></span></code></pre></div><h3 id="退出merge" tabindex="-1">退出merge <a class="header-anchor" href="#退出merge" aria-label="Permalink to &quot;退出merge&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 保留本地的更改,中止合并-&gt;重新合并-&gt;重新拉取</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge --abort</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --merge</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull</span></span></code></pre></div><h3 id="合并禁用快进模式" tabindex="-1">合并禁用快进模式 <a class="header-anchor" href="#合并禁用快进模式" aria-label="Permalink to &quot;合并禁用快进模式&quot;">​</a></h3><p>在Git中，合并分支时，默认情况下会采用快进模式（fast-forward），这种模式下，如果当前分支和要合并的分支之间没有发生分叉，则直接将当前分支指向要合并的分支，不会产生新的合并提交。而使用--no-ff参数可以禁用快进模式，强制Git创建一个新的合并提交，保留了要合并的分支的历史信息，使得整个提交历史更加清晰。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 会将名为&quot;myfeature&quot;的分支合并到当前分支，同时创建一个新的合并提交，无论是否可以进行快进合并</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge --no-ff myfeature</span></span></code></pre></div><h3 id="本地远程分支关联" tabindex="-1">本地远程分支关联 <a class="header-anchor" href="#本地远程分支关联" aria-label="Permalink to &quot;本地远程分支关联&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout -b dev_worker_analysis</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --set-upstream-to=origin/dev_worker_analysis</span></span></code></pre></div><h3 id="根据develop新建远程分支" tabindex="-1">根据develop新建远程分支 <a class="header-anchor" href="#根据develop新建远程分支" aria-label="Permalink to &quot;根据develop新建远程分支&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout -b dev_validate origin/develop</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin dev_validate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b 本地分支名x origin/远程分支名x 拉取远程分支并同时创建对应的本地分支</span></span></code></pre></div><h3 id="dev合并到master" tabindex="-1">dev合并到Master <a class="header-anchor" href="#dev合并到master" aria-label="Permalink to &quot;dev合并到Master&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 假如我们现在在dev分支上，刚开发完项目，执行了下列命令</span></span>
<span class="line"><span style="color:#A6ACCD;">git add .</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m ‘dev&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 然后我们要把dev分支的代码合并到master分支上，首先切换到master分支上</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果是多人开发的话 需要把远程master上的代码pull下来</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 然后我们把dev分支的代码合并到master上</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 然后查看状态</span></span>
<span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">On branch master</span></span>
<span class="line"><span style="color:#A6ACCD;">Your branch is ahead of &#39;origin/master&#39; by 12 commits.</span></span>
<span class="line"><span style="color:#A6ACCD;">(use &quot;git push&quot; to publish your local commits)</span></span>
<span class="line"><span style="color:#A6ACCD;">nothing to commit, working tree clean</span></span>
<span class="line"><span style="color:#A6ACCD;">上面的意思就是你有12个commit，需要push到远程master上</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 执行下面命令即可</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master</span></span></code></pre></div><h3 id="git-rebase" tabindex="-1">git rebase <a class="header-anchor" href="#git-rebase" aria-label="Permalink to &quot;git rebase&quot;">​</a></h3><p>根据主分支拉取分支开发一段时间后，主分支有新的提交</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;">git push master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout develop</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit develop 修改</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase master</span></span>
<span class="line"><span style="color:#A6ACCD;">git push develop 修改</span></span></code></pre></div><h3 id="git-删除文件命令" tabindex="-1">git 删除文件命令 <a class="header-anchor" href="#git-删除文件命令" aria-label="Permalink to &quot;git 删除文件命令&quot;">​</a></h3><p>在上传项目到github时,忘记忽略了某个文件夹.idea,就直接push上去了, 最后意识到了此问题,决定删除掉远程仓库中的.idea文件夹 在github上只能删除仓库,却无法删除文件夹或文件, 所以只能通过命令来解决</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">首先进入你的master文件夹下, Git Bash Here ,打开命令窗口</span></span>
<span class="line"><span style="color:#A6ACCD;"># 帮助命令</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git --help      </span></span>
<span class="line"><span style="color:#A6ACCD;"># 将远程仓库里面的项目拉下来                                </span></span>
<span class="line"><span style="color:#A6ACCD;">$ git pull origin master   </span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看有哪些文件夹                 </span></span>
<span class="line"><span style="color:#A6ACCD;">$ dir         </span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除.idea文件夹                                       </span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm -r --cached .idea     </span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交,添加操作说明         </span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m &#39;删除.idea&#39;     </span></span>
<span class="line"><span style="color:#A6ACCD;"># 将本次更改更新到github项目上去   </span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push -u origin master</span></span></code></pre></div><h3 id="git-reflog" tabindex="-1">git reflog <a class="header-anchor" href="#git-reflog" aria-label="Permalink to &quot;git reflog&quot;">​</a></h3><h3 id="拉取代码密码输入错误" tabindex="-1">拉取代码密码输入错误 <a class="header-anchor" href="#拉取代码密码输入错误" aria-label="Permalink to &quot;拉取代码密码输入错误&quot;">​</a></h3><p>[**GIT拉取代码的时候提示AUTHENTICATION FAILED FOR <a href="https://www.cnblogs.com/yanghaifeng/p/11548067.html" target="_blank" rel="noreferrer">]**</a> 解决办法，用管理员身份打开git命令行，执行 git config --global credential.helper store 重新clone的时候会提示让输入用户名，然后弹出框让输入密码，就可以了</p><h3 id="分支覆盖" tabindex="-1">分支覆盖 <a class="header-anchor" href="#分支覆盖" aria-label="Permalink to &quot;分支覆盖&quot;">​</a></h3><p>git将某个分支的代码完全覆盖另一个分支<br> 假设每个人有个开发分支，想隔一段时间就把自己的开发分支上的代码保持和测试分支一致，则需要如下操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1.我想将test分支上的代码完全覆盖dev分支，首先切换到dev分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout dev</span></span>
<span class="line"><span style="color:#A6ACCD;">2.然后直接设置代码给远程的test分支上的代码</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard origin/test</span></span>
<span class="line"><span style="color:#A6ACCD;">3.执行上面的命令后dev分支上的代码就完全被test分支上的代码覆盖了，注意只是本地分支，这时候还需要将本地分支强行推到远程分支。</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f</span></span></code></pre></div><h3 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-label="Permalink to &quot;git stash&quot;">​</a></h3><p>常用命令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## 保存</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询已缓存的数据列表</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 应用缓存数据不删除缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apply</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 弹出缓存数据并删除缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询差异</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">changes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">drop</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clear</span></span>
<span class="line"><span style="color:#FFCB6B;">Git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span></code></pre></div><p>idea页面<br><img src="`+p+'" alt="image"></p><p>参考文档<br> [git-stash用法小结]<a href="https://www.cnblogs.com/tocy/p/git-stash-reference.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/tocy/p/git-stash-reference.html</a></p><h3 id="git-patch" tabindex="-1">git patch <a class="header-anchor" href="#git-patch" aria-label="Permalink to &quot;git patch&quot;">​</a></h3><p><img src="'+t+`" alt="image"></p><h2 id="分支命名" tabindex="-1">分支命名 <a class="header-anchor" href="#分支命名" aria-label="Permalink to &quot;分支命名&quot;">​</a></h2><p>功能分支的名字，可以采用feature-*的形式命名。<br> 比如 feature-员工管理开发</p><h2 id="tag" tabindex="-1">tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;tag&quot;">​</a></h2><p>根据tag号获取指定tag</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone --branch [tags标签] [git地址]</span></span>
<span class="line"><span style="color:#A6ACCD;">git switch -c [tag名字]</span></span></code></pre></div><h2 id="缩写命令" tabindex="-1">缩写命令 <a class="header-anchor" href="#缩写命令" aria-label="Permalink to &quot;缩写命令&quot;">​</a></h2><p>配置缩写命令</p><p><a href="https://www.cnblogs.com/300js/p/10901274.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/300js/p/10901274.html</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --global alias.st status</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global alias.co checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global alias.ci commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global alias.br branch</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global alias.unstage &#39;reset HEAD&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global alias.last &#39;log -1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global alias.lg &quot;log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit&quot;</span></span></code></pre></div><p>常用缩写命令</p><p><a href="https://www.cnblogs.com/yeng/p/7774701.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/yeng/p/7774701.html</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gco master   //相当于git checkout master</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>用户名的@符号需要转义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone http://tong.xu%40counect.com:xu密码@gitlab.counect.com/cube-auto/tenservice.git</span></span></code></pre></div><h2 id="github搜索" tabindex="-1">github搜索 <a class="header-anchor" href="#github搜索" aria-label="Permalink to &quot;github搜索&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">in:name example  名字中有“example”</span></span>
<span class="line"><span style="color:#A6ACCD;">in:readme example  readme中有“example”</span></span>
<span class="line"><span style="color:#A6ACCD;">in:description example 描述中有“example”</span></span>
<span class="line"><span style="color:#A6ACCD;">stars:&gt;1000  star&gt;1000</span></span>
<span class="line"><span style="color:#A6ACCD;">forks:&gt;1000  fork&gt;1000</span></span>
<span class="line"><span style="color:#A6ACCD;">pushed:&gt;2019-09-01  2019年9月1日后有更新的</span></span>
<span class="line"><span style="color:#A6ACCD;">language:java  用Java编写的项目</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">从name中搜索，比如要根据name搜索spring boot的项目，可在输入框输入</span></span>
<span class="line"><span style="color:#A6ACCD;">in name spring boot  //根据名称搜索项目 spring boot stars:&gt;3000 forks:&gt;10 //包含spring boot 并且star数大于3000，forks数大于10的项目               </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">在readme中搜索</span></span>
<span class="line"><span style="color:#A6ACCD;">in readme spring boot              </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">项目名地址后加compare</span></span>
<span class="line"><span style="color:#A6ACCD;">https://github.com/kartoza/fbf-project/compare</span></span></code></pre></div>`,58),i=[c];function r(C,g,h,A,d,y){return a(),n("div",null,i)}const D=s(o,[["render",r]]);export{u as __pageData,D as default};
