# GIT
Git(读音为/gɪt/。)是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。 Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
## 下载安装
1. 打开官网,找见下载地址
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E5%AE%89%E8%A3%85.png)
2. 打开安装包,傻瓜式安装(可以更改保存路径).
## 创建gitHub
1. 百度找到GitHub官方网站（https://github.com/ ）
2. 点击Sign up注册GitHub账号
- 第一步：填写账号邮箱密码，点击create an account 进入下一步，系统会向你填写的邮箱发送一封确认邮件，去登陆邮箱确认。
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E7%AC%AC%E4%B8%80%E6%AD%A5.png)
- 第二步：保持默认，点击continue跳到下一步
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E7%AC%AC%E4%BA%8C%E6%AD%A5.png)
- 第三步：是问卷可选填，然后点击提交按钮，账号就注册成功了！
3. 创建应用
- 点击右上角头像，选择settings
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/20180718211913934.png)
- 选择Developer settings
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/20180718212436674.png)
- 点击绿色按钮Register a new applications
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/2018071821260532.png)
- 填写项目信息,完成后点击注册。
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/20180718213959678.png)
- 完成项目注册，获取到Client ID 和 Client Secret
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/20180718214459863.png)
## 配置环境,ssh秘钥
1. 在git文件夹中找见ssh-keygen.exe,复制路径
2. 打开我的电脑属性--高级系统设置--环境变量--path中配置
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E7%8E%AF%E5%A2%83.png)
3. 在cmd中输入ssh-keygen,一顿回车,直到生成下图所示.
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E7%94%9F%E6%88%90%E7%A7%98%E9%92%A5.png)
4. 然后输入cat id_rsa.pub,或输出秘钥,直接复制(注意:邮箱不用复制)
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E7%A7%98%E9%92%A5.png)
5. 然后登陆gitHub,点自己头像 -- settings -- SSH and GPG keys -- New SSH key,然后粘贴在key里,title随便写.
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E6%B7%BB%E5%8A%A0.png)
6. 配置完成
![git](https://raw.githubusercontent.com/wangyuxin8714/ico/master/gitPicture/%E6%B7%BB%E5%8A%A0%E6%88%90%E5%8A%9F.png)

这样git和gitHub仓库就创建好了,我们可以在这里保存管理自己的代码.

## git命令行

### 一、新建代码库
- 在当前目录新建一个Git代码库
```
$ git init
```
- 新建一个目录，将其初始化为Git代码库
```
$ git init [project-name]
```
- 下载一个项目和它的整个代码历史
```
$ git clone [url]
```
### 二、配置
Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。
- 显示当前的Git配置
```
$ git config --list
```
- 编辑Git配置文件
```
$ git config -e [--global]
```
- 设置提交代码时的用户信息
```
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```
### 三、增加/删除文件
- 添加指定文件到暂存区
```
$ git add [file1] [file2] ...
```
- 添加指定目录到暂存区，包括子目录
```
$ git add [dir]
```
- 添加当前目录的所有文件到暂存区
```
$ git add .
```
- 添加每个变化前，都会要求确认
- 对于同一个文件的多处变化，可以实现分次提交
```
$ git add -p
```
- 删除工作区文件，并且将这次删除放入暂存区
```
$ git rm [file1] [file2] ...
```
- 停止追踪指定文件，但该文件会保留在工作区
```
$ git rm --cached [file]
```
- 改名文件，并且将这个改名放入暂存区
```
$ git mv [file-original] [file-renamed]
```
### 四、代码提交
- 提交暂存区到仓库区
```
$ git commit -m [message]
```
- 提交暂存区的指定文件到仓库区
```
$ git commit [file1] [file2] ... -m [message]
```
- 提交工作区自上次commit之后的变化，直接到仓库区
```
$ git commit -a
```
- 提交时显示所有diff信息
```
$ git commit -v
```
- 使用一次新的commit，替代上一次提交
- 如果代码没有任何新变化，则用来改写上一次commit的提交信息
```
$ git commit --amend -m [message]
```
- 重做上一次commit，并包括指定文件的新变化
```
$ git commit --amend [file1] [file2] ...
```
### 五、分支
- 列出所有本地分支
```
$ git branch
```
- 列出所有远程分支
```
$ git branch -r
```
- 列出所有本地分支和远程分支
```
$ git branch -a
```
- 新建一个分支，但依然停留在当前分支
```
$ git branch [branch-name]
```
- 新建一个分支，并切换到该分支
```
$ git checkout -b [branch]
```
- 新建一个分支，指向指定commit
```
$ git branch [branch] [commit]
```
- 新建一个分支，与指定的远程分支建立追踪关系
```
$ git branch --track [branch] [remote-branch]
```
- 切换到指定分支，并更新工作区
```
$ git checkout [branch-name]
```
- 切换到上一个分支
```
$ git checkout -
```
- 建立追踪关系，在现有分支与指定的远程分支之间
```
$ git branch --set-upstream [branch] [remote-branch]
```
- 合并指定分支到当前分支
```
$ git merge [branch]
```
- 选择一个commit，合并进当前分支
```
$ git cherry-pick [commit]
```
- 删除分支
```
$ git branch -d [branch-name]
```
- 删除远程分支
```
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```
### 六、标签
- 列出所有tag
```
$ git tag
```
- 新建一个tag在当前commit
```
$ git tag [tag]
```
- 新建一个tag在指定commit
```
$ git tag [tag] [commit]
```
- 删除本地tag
```
$ git tag -d [tag]
```
- 删除远程tag
```
$ git push origin :refs/tags/[tagName]
```
- 查看tag信息
```
$ git show [tag]
```
- 提交指定tag
```
$ git push [remote] [tag]
```
- 提交所有tag
```
$ git push [remote] --tags
```
- 新建一个分支，指向某个tag
```
$ git checkout -b [branch] [tag]
```
### 七、查看信息
- 显示有变更的文件
```
$ git status
```
- 显示当前分支的版本历史
```
$ git log
```
- 显示commit历史，以及每次commit发生变更的文件
```
$ git log --stat
```
- 搜索提交历史，根据关键词
```
$ git log -S [keyword]
```
- 显示某个commit之后的所有变动，每个commit占据一行
```
$ git log [tag] HEAD --pretty=format:%s
```
- 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
```
$ git log [tag] HEAD --grep feature
```
- 显示某个文件的版本历史，包括文件改名
```
$ git log --follow [file]
$ git whatchanged [file]
```
- 显示指定文件相关的每一次diff
```
$ git log -p [file]
```
- 显示过去5次提交
```
$ git log -5 --pretty --oneline
```
- 显示所有提交过的用户，按提交次数排序
```
$ git shortlog -sn
```
- 显示指定文件是什么人在什么时间修改过
```
$ git blame [file]
```
- 显示暂存区和工作区的差异
```
$ git diff
```
- 显示暂存区和上一个commit的差异
```
$ git diff --cached [file]
```
- 显示工作区与当前分支最新commit之间的差异
```
$ git diff HEAD
```
- 显示两次提交之间的差异
```
$ git diff [first-branch]...[second-branch]
```
- 显示今天你写了多少行代码
```
$ git diff --shortstat "@{0 day ago}"
```
- 显示某次提交的元数据和内容变化
```
$ git show [commit]
```
- 显示某次提交发生变化的文件
```
$ git show --name-only [commit]
```
- 显示某次提交时，某个文件的内容
```
$ git show [commit]:[filename]
```
- 显示当前分支的最近几次提交
```
$ git reflog
```
### 八、远程同步
- 下载远程仓库的所有变动
```
$ git fetch [remote]
```
- 显示所有远程仓库
```
$ git remote -v
```
- 显示某个远程仓库的信息
```
$ git remote show [remote]
```
- 增加一个新的远程仓库，并命名
```
$ git remote add [shortname] [url]
```
- 取回远程仓库的变化，并与本地分支合并
```
$ git pull [remote] [branch]
```
- 上传本地指定分支到远程仓库
```
$ git push [remote] [branch]
```
- 强行推送当前分支到远程仓库，即使有冲突
```
$ git push [remote] --force
```
- 推送所有分支到远程仓库
```
$ git push [remote] --all
```
### 九、撤销
- 恢复暂存区的指定文件到工作区
```
$ git checkout [file]
```
- 恢复某个commit的指定文件到暂存区和工作区
```
$ git checkout [commit] [file]
```
- 恢复暂存区的所有文件到工作区
```
$ git checkout .
```
- 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
```
$ git reset [file]
```
- 重置暂存区与工作区，与上一次commit保持一致
```
$ git reset --hard
```
- 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
```
$ git reset [commit]
```
- 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
```
$ git reset --hard [commit]
```
- 重置当前HEAD为指定commit，但保持暂存区和工作区不变
```
$ git reset --keep [commit]
```
- 新建一个commit，用来撤销指定commit
- 后者的所有变化都将被前者抵消，并且应用到当前分支
```
$ git revert [commit]
```
- 暂时将未提交的变化移除，稍后再移入
```
$ git stash
$ git stash pop
```
### 十、其他
- 生成一个可供发布的压缩包
```
$ git archive
```

## 使用git时候遇到的坑
1. 在使用git add <文件名>命令的时候，最好紧跟着git commit -m '操作描述'。

坑：如果你上一次操作的时候，只将一些文件add到了暂存区，但是并没有commit到本地版本库中，那么你这次push的时候，会将上一次残留在暂存区的文件，一起push到远程库中；而上次操作中已经commit到本地版本库的文件，是不会影响这次的push的.

2. git reset <文件名> 撤销已经add到暂存区，但是还没有commit的文件。

如果你往暂存区中add了一些错误的文件，但是还没有commit到本地版本库。你可以使用上述命令撤销add。

3. git checkout -- <文件名>

误删工作区的文件，用本地版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

坑：会清除工作区中未添加到暂存区的改动 ，使用的时候要注意。

4. git rm -r --cache <文件名> 删除暂存区的文件（不改变工作区的该文件）

坑： 删除暂存区的该文件之前，你要确定之前在暂存区中的文件，你确实是不需要了，能被删除。因为该命令实际上的意思是，停止追踪某个文件（但是并不会改变工作区中的该文件），这样的话这个文件就没有追踪记录了。假如你在本地工作区误删了该文件（但是该文件你之前已经commit到了本地版本库中），此时你想要恢复该文件到本地的工作区，是不能用git checkout -- <文件名>恢复过来的！！！

5. git status 查看暂存区和工作区文件的状态

git status只能看到”add到暂存区但是还没有commit到本地版本库的文件”和”还没有被add到暂存区的文件（工作区的文件）”的状态，已经commit到本地版本库的文件，是看不到的。看项目历史的信息要使用git log。

“add到暂存区但是还没有commit到本地版本库的文件”的状态是“unstaged”； 
“还没有被add到暂存区的文件”的状态是“untracked”；



