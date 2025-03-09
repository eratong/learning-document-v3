# git

## 命令

### 基础命令

```
git init 创建本地版本库
git remote add origin https://github.com/eratong/tongplay.git  本地添加远程库
git branch 查看本地分支
git branch -r  查看远端分支
git branch master  创建本地master分支
git checkout master 切换到master分支
git commit 要先commit 才能推送
git push orgin master 本地master推送到远端  并创建远端master分支
```

### 部分代码合并到另一个分支
```
# 切换到master分支
# 下面这个命令加上 develop分支的提交号
git cherry-pick 20d5f7213e9c21dec7461c5f7326012bb134451f
# push一下代码
```
![image-20221108164141451](git.assets/image-20221108164141451.png)

### 撤回commit
```
# 保留修改的代码
git reset --soft HEAD^
# 原来修改的代码也没了
git reset --hard HEAD^
```

### 撤回push
```
# 查询提交日志
git log
# 回退到指定的版本，版本是前五位,完整的也行
git reset --hard 1c12ec4271bc98c267c627380af345473ec56d55
# 将当前版本push上去
git push origin 分支名 --force    
git push -f origin develop  
执行完远端git提交记录就会撤回并消失
```

### 退出merge
```
# 保留本地的更改,中止合并->重新合并->重新拉取
git merge --abort
git reset --merge
git pull
```

### 合并禁用快进模式
在Git中，合并分支时，默认情况下会采用快进模式（fast-forward），这种模式下，如果当前分支和要合并的分支之间没有发生分叉，则直接将当前分支指向要合并的分支，不会产生新的合并提交。而使用--no-ff参数可以禁用快进模式，强制Git创建一个新的合并提交，保留了要合并的分支的历史信息，使得整个提交历史更加清晰。
```
# 会将名为"myfeature"的分支合并到当前分支，同时创建一个新的合并提交，无论是否可以进行快进合并
git merge --no-ff myfeature
```

### 本地远程分支关联
```
git checkout -b dev_worker_analysis
git branch --set-upstream-to=origin/dev_worker_analysis
```

### 根据develop新建远程分支
```
git checkout -b dev_validate origin/develop
git push origin dev_validate

git checkout -b 本地分支名x origin/远程分支名x 拉取远程分支并同时创建对应的本地分支
```

### dev合并到Master
```
# 假如我们现在在dev分支上，刚开发完项目，执行了下列命令
git add .
git commit -m ‘dev'
git push -u origin dev

# 然后我们要把dev分支的代码合并到master分支上，首先切换到master分支上
git checkout master

# 如果是多人开发的话 需要把远程master上的代码pull下来
git pull origin master

# 然后我们把dev分支的代码合并到master上
git merge dev

# 然后查看状态
git status

On branch master
Your branch is ahead of 'origin/master' by 12 commits.
(use "git push" to publish your local commits)
nothing to commit, working tree clean
上面的意思就是你有12个commit，需要push到远程master上

# 执行下面命令即可
git push origin master

```

### git rebase
根据主分支拉取分支开发一段时间后，主分支有新的提交
```
git checkout master
git push master

git checkout develop
git commit develop 修改
git rebase master
git push develop 修改
```

### git 删除文件命令
在上传项目到github时,忘记忽略了某个文件夹.idea,就直接push上去了, 最后意识到了此问题,决定删除掉远程仓库中的.idea文件夹
在github上只能删除仓库,却无法删除文件夹或文件, 所以只能通过命令来解决
```
首先进入你的master文件夹下, Git Bash Here ,打开命令窗口
# 帮助命令
$ git --help      
# 将远程仓库里面的项目拉下来                                
$ git pull origin master   
# 查看有哪些文件夹                 
$ dir         
# 删除.idea文件夹                                       
$ git rm -r --cached .idea     
# 提交,添加操作说明         
$ git commit -m '删除.idea'     
# 将本次更改更新到github项目上去   
$ git push -u origin master               
```

### git reflog 

### 拉取代码密码输入错误
[**GIT拉取代码的时候提示AUTHENTICATION FAILED FOR [\]**](https://www.cnblogs.com/yanghaifeng/p/11548067.html)
解决办法，用管理员身份打开git命令行，执行 git config --global credential.helper store
重新clone的时候会提示让输入用户名，然后弹出框让输入密码，就可以了

### 分支覆盖
git将某个分支的代码完全覆盖另一个分支\
假设每个人有个开发分支，想隔一段时间就把自己的开发分支上的代码保持和测试分支一致，则需要如下操作：
```
1.我想将test分支上的代码完全覆盖dev分支，首先切换到dev分支
git checkout dev
2.然后直接设置代码给远程的test分支上的代码
git reset --hard origin/test
3.执行上面的命令后dev分支上的代码就完全被test分支上的代码覆盖了，注意只是本地分支，这时候还需要将本地分支强行推到远程分支。
git push -f
```


### git stash
常用命令
```bash
## 保存
Git stash
Git stash save

# 查询已缓存的数据列表
Git stash list

# 应用缓存数据不删除缓存
Git stash apply <stash id>
# 弹出缓存数据并删除缓存
Git stash pop

# 查询差异
Git stash changes

Git stash drop
Git stash clear
Git stash branch
```

idea页面\
![image](git.assets/image1.png)

参考文档\
[git-stash用法小结]<https://www.cnblogs.com/tocy/p/git-stash-reference.html>


### git patch

![image](git.assets/image2.png)



## 分支命名
功能分支的名字，可以采用feature-*的形式命名。\
比如 feature-员工管理开发

## tag
根据tag号获取指定tag
```
git clone --branch [tags标签] [git地址]
git switch -c [tag名字]
```

## 缩写命令
配置缩写命令

https://www.cnblogs.com/300js/p/10901274.html

```
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.unstage 'reset HEAD'
git config --global alias.last 'log -1'
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

```

常用缩写命令

https://www.cnblogs.com/yeng/p/7774701.html

```
gco master   //相当于git checkout master
```

## 其他
用户名的@符号需要转义
```
git clone http://tong.xu%40counect.com:xu密码@gitlab.counect.com/cube-auto/tenservice.git
```

## github搜索
```
in:name example  名字中有“example”
in:readme example  readme中有“example”
in:description example 描述中有“example”
stars:>1000  star>1000
forks:>1000  fork>1000
pushed:>2019-09-01  2019年9月1日后有更新的
language:java  用Java编写的项目

从name中搜索，比如要根据name搜索spring boot的项目，可在输入框输入
in name spring boot  //根据名称搜索项目 spring boot stars:>3000 forks:>10 //包含spring boot 并且star数大于3000，forks数大于10的项目               

在readme中搜索
in readme spring boot              

项目名地址后加compare
https://github.com/kartoza/fbf-project/compare
```

