# 服务器端渲染

## 前端配置

&emsp;&emsp;首先您需要导出框架入口提供的```SSR```实例。

&emsp;&emsp;并在[框架初始化配置项](./novae.html#init)中加入```loadComponents```对象，其中需要定义由服务器端渲染转换为单页应用时，需要被实例化状态的组件类。

&emsp;&emsp;如您要在服务端使用虚拟路由，请将路由条目即[虚拟路由配置项](./router.html#配置项)构成的数组以自定义的形式导出。

&emsp;&emsp;因模板组件的```beforeCreate```与```created```生命周期回调均在服务器端执行，您可以在对应回调中使用[```DebugTool.isInNode```](./utils.html#isinnode)方法，判断代码环境，对服务器端采取不同获取数据、以及执行逻辑的策略。并且与模板绑定的数据您可以依旧定义于模板组件的data方法中，服务器端会将状态发送至前端，并进行恢复。

## 后端配置

&emsp;&emsp;首先您需要在Node.js环境中引入服务器端渲染功能模块，如下所示。

```javascript
const SSR = require("novae-js/dist/server").default
```

### init

&emsp;&emsp;初始化服务器端渲染功能方法。

- 参数列表

  1. ```options``` (Object): 配置项，其中必须传入前述打包好的前端js文件作为```browser```属性，可采用```require```方式引入
  
- 返回值

  空
  
- 备注

  1. 欲使用服务器端渲染功能，此方法必须被运行。  
  
### router

&emsp;&emsp;初始化虚拟路由方法。

- 参数列表

  1. ```router``` (Array): 路由条目，一般由打包完毕的前端js文件导出，开发者自定义导出名，确保导出项为[虚拟路由配置项](./router.html#配置项)构成的数组即可
  
- 返回值

  空  

### render

&emsp;&emsp;渲染HTML模板的方法。

- 参数列表

  1. ```url``` (string): 虚拟路由路径，一般由Web框架路由提供
  2. ```templateUrl``` (string): 打包完毕的HTML模板路径
  3. ```options = {}``` (Object): 配置项
  4. ```onsuccess``` (Function(string)): 成功渲染模板回调，参数列表第一项为渲染后的HTML模板串，可以直接用以发送响应报文
  5. ```?onerror``` (?Function(NovaeError)): 失败渲染模板回调，参数列表的第一项为错误属性
  
- 返回值

  空
  
- options配置

  如您需要在HTML模板中指定位置渲染内容，您首先需要在模板中定义渲染名，以此种方式```{{ 渲染名称 }}```，然后在```options```的```injects```属性中建立属性名为前方渲染名称、属性为渲染组件类的对象，这样框架就会将渲染的内容替换前述的```{{ 渲染名称 }}```。

- 例子

&emsp;&emsp;以使用```express```Web框架举例。

```javascript
const SSR = require("novae-js/dist/server").default,
	  browser = require("../../dist/ssr"),
	  express = require('express'),
	  app = express(),
	  port = 233;

// 初始化服务器端渲染功能
SSR.init({
	browser: browser // 打包完毕的本框架前端js
})

// 加载路由
SSR.router(browser.routers)

// 路由优先解析静态资源
app.use(express.static("../../dist"))

// 路由处理访问模板
app.get('*', (req, res) => {
	// 调用本框架的服务器端渲染功能，
	// 参数项分别为路由地址、模板路径、配置项、成功/失败渲染回调
	SSR.render(req.originalUrl, "../../dist/ssr.html", {}, 
	(out) => {
		res.status(200)
		   .send(out)
	}, (err) => {
		if (err.content === "Route Not Found")
			res.status(404)
			   .send()
		else
			res.status(500)
			   .send(err.toString())
	})
})

// 监听端口
app.listen(port)
```

- 备注
  
  1. 使用虚拟路由时，路由对应组件渲染的串会替换HTML模板中```{{ novae_ssr_router }}```标识符，请在相应HTML模板中预先定义好。
  
## 使用方法

&emsp;&emsp;在前端接收到服务器端渲染的内容时，会适时转换为单页应用模式，此过程会将后端使用```script```语句在```window```上挂载的```NOVAE_SSR_DATA```属性进行解析、以及恢复状态，该属性结构如下图所示。

```javascript
window.NOVAE_SSR_DATA = {
	"router": {
		"router": {
			"name": "About"
		}, // 路由信息
		"component": {
			"name": "AboutComponent",
			"type": "component",
			"data": {
				"a": 1
			}
		}
	},
	"others": {}
}
```

&emsp;&emsp;完成解析后，您可以在```Novae.ssrComponents```中获取到实例化后恢复状态的组件，结构如下所示。

```javascript
{
	"router": AboutComponent, // 实例化后的对应组件
	"others": {} // 属性名为在服务器配置的render方法中自定义的渲染名，属性为对应组件
}
```

&emsp;&emsp;另外从后端恢复状态的模板组件，其```beforeCreate```与```created```生命周期回调均在服务器端执行，前端不再重复执行。