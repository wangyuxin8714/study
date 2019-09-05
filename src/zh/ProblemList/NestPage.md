# 嵌套页面

### 请求数据,返回html
我们发送ajax请求回来的html,是一个字符串,就需要加到body或标签中:
```
    axios.post("http://192.168.1.49:8001/Report/GetPageLayout").then(data=>{
        var homt=document.querySelector(".home")
        home.innerHTML=data.data[0].WesnLyss
    })
```
当我使用innerHTML插入时,发现dom节点可以加入,但页面显示不出来.后来使用jquery才显示出页面
```
    $(function(){
        $.ajax({
            type:"post",
            url:"http://192.168.1.49:8001/Report/GetPageLayout",
            success:function(data){
                $(".home").html(JSON.parse(data)[0].WesnLyss);
            }
        })
    })
```
然后我们需要把这个页面嵌入其它的html中,我们就用到了iframe
### 普通html文件中iframe嵌套页面
只需要引入相对路径就可以,宽和高必须设置
```
    <iframe src="./index.html" width="1200" height="300" frameborder="0" scrolling="auto"></iframe>
```
### vue中iframe嵌套页面
如HTML需要起服务,那么需引入http://192.168.1.38:5501/index.html
```
    <iframe src="http://192.168.1.38:5501/index.html" width="1200" height="300" frameborder="0" scrolling="auto"></iframe>
```