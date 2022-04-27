# 无障碍及适老化改造

## 开启方法

&emsp;&emsp;无障碍及适老化改造功能默认关闭，开启需要从[```Novae.init```](./novae.html#init)方法传入```accessibility: true```项。
如使用导读功能还需配置朗读接口[```getVoice```](#getvoice)项。

### getVoice

- 参数列表

  1. ```text``` (string): 朗读的文本
  2. ```callback``` (Function): 回调方法，需要在获取到朗读语音数据后，将数据作为该函数变量的参数运行
  
- 返回值

  空
  
- 例子

  getVoice配置

```javascript
...
getVoice: function(text, callback) {
			let xhr = new XMLHttpRequest()
			// 接口地址，此处以我们提供的服务端代码所构造的路径地址举例
			xhr.open('GET', "//...:3000/tts.mp3?text=" + encodeURIComponent(text))
			xhr.responseType = "arraybuffer"
			xhr.onload = () => {
				if (xhr.status === 200) {
					callback(xhr.response)
				}
			}
			xhr.send()
		},
...		
```

  使用阿里云文字转语音接口的Node.js服务端例子

```javascript
const request = require('request'),
	  RPCClient = require('@alicloud/pop-core').RPCClient,
	  express = require('express'),
	  app = express(),
	  port = 3000,
	  appKey = '',
	  Referer = //;

var client = new RPCClient({
  accessKeyId: '',
  accessKeySecret: '',
  endpoint: 'http://nls-meta.cn-shanghai.aliyuncs.com',
  apiVersion: '2019-02-28'
}), token;
updateToken();

function updateToken() {
	return client.request('CreateToken').then((result) => {
		token = result.Token.Id;
	});
}

function processPOSTRequest(appkeyValue, tokenValue, textValue, formatValue, callback, times = 0) {
    var url = 'https://nls-gateway-cn-shanghai.aliyuncs.com/stream/v1/tts';
    /**
     * 请求参数，以JSON格式字符串填入HTTPS POST请求的Body中。
    */
    var task = {
        appkey : appkeyValue,
        token : tokenValue,
        text : textValue,
        format : formatValue
        // voice 发音人，可选，默认是xiaoyun。
        // voice : 'xiaoyun',
        // volume 音量，范围是0~100，可选，默认50。
        // volume : 50,
        // speech_rate 语速，范围是-500~500，可选，默认是0。
        // speech_rate : 0,
        // pitch_rate 语调，范围是-500~500，可选，默认是0。
        // pitch_rate : 0
    };
    var bodyContent = JSON.stringify(task);
    /**
     * 设置HTTPS POST请求头部。
     */
    var httpHeaders = {
        'Content-Type' : 'application/json'
    }
    /**
     * 设置HTTPS POST请求。
     * encoding必须设置为null，HTTPS响应的Body为二进制Buffer类型。
     */
    var options = {
        url: url,
        method: 'POST',
        headers: httpHeaders,
        body: bodyContent,
        encoding: null
    };
	
    request(options, (error, response, body) => {
		let content;
		if (response.headers["Content-Type"] === "application/json" && 
			(content = response.toJSON()) && 
			times < 1 && content.status === 40000001) {
			++times;
			updateToken().then(processPOSTRequest(...arguments))
		} else
			callback(response)
    });
}

app.get('/tts.mp3', (req, res) => {
	let params = req.query
	if (! Referer.test(req.headers["referer"])) {
		res.status(403)
		   .set({
			   "Content-Type": "application/json",
			   "Access-Control-Allow-Origin": "*"
		   })
		   .send({
				result: "",
				status: 403,
				message: "Gateway:DIRECTIVE_INVALID:Forbidden"
			})
		return;
	}
	
	processPOSTRequest(appKey, token, params.text, "mp3", r => {
		res.status(r.statusCode)
		   .set(r.headers)
		   .set("Access-Control-Allow-Origin", "*")
		   
		if (r.statusCode / 100 === 2)
		   res.set("Cache-Control", "max-age=31536000")
		  
		res.send(r.body)
	})
})

app.listen(port)	
```

## 使用方法

&emsp;&emsp;您可以通过运行```Novae.accessibility.open```方法，开启无障碍工具栏。按钮可采用我们提供的矢量无障碍标识，并进一步使用CSS代码或其他方式美化，调用方法如下：

```html
<svg class="header-accessibility-icon novae-icon" aria-hidden="true">
	<use xlink:href="#icon-wuzhangai"></use>
</svg>
```

&emsp;&emsp;开启工具栏后会将您在```Novae.init```方法中配置的根元素DOM作为基准元素，悬浮在根元素DOM上方并不遮挡根元素内容，同样辅屏开启后悬浮在视窗底部的行为也不会遮挡您页脚的内容，我们的框架已留出对应的偏移量。