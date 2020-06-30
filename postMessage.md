* 语法

```
  postMessage(content, origin);
  // content 为发送的信息
  // origin 为目标的域名，包括协议与主机名，端口可选
```

* 注意
调用postMessage的主体为接受方
比如A窗口给B窗口发消息
在A窗口中
B.postMessage('hello', B.origin);