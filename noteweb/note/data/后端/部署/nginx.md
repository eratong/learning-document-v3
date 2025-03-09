# nginx

## 基础
描述
> web服务器\
> 做静态内容服务和代理服务器

官网
> <https://nginx.org/en/index.html>

## 配置
请求转发导致session失效
```
    server {
        listen       80;
        server_name  xu.ye.tong; #需要搭配修改host才有用

        location /uocr/ {
			proxy_pass http://localhost:8086/unifiedocr/;
			proxy_cookie_path /unifiedocr /uocr;

            root   html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```
## 代理

> 正向代理是代理客户端，为客户端收发请求，使真实客户端对服务器不可见；\
> 而反向代理是代理服务器端，为服务器收发请求，使真实服务器对客户端不可见。

## 命令
启动 
> nginx.exe\
> 或者\
> nginx start

重新启动 
> nginx.exe -s reload
>

## 参考文档
<https://blog.csdn.net/weixin_46243043/article/details/126468087>