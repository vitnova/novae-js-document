# 虚拟路由

## 配置项

&emsp;&emsp;您需要从[```Novae.router```](./novae.html#router)方法传入以下形式的配置项。

### name

&emsp;&emsp;路由内置名称，可通过从框架入口导入的[```goTo```](#goto)方法转到。

- 类型

  string

### url

&emsp;&emsp;在地址栏匹配的路径，支持自定义参数列表及正则表达式定义。

- 类型

  string | RegExp
  
- 自定义参数列表
  
  以```/```分割，由```:```开头的项可被识别为参数项。
  以```/courses/:courseID/:SNo/score```举例，中间的```:courseID```与```:sNo```可替换为任何符合规范的值，识别后会作为参数将```courseID```与```sNo```传入对应```component```中，并可以通过```this.params.参数名```调用。

- 正则表达式
  
  该种方式会在所有自定义参数列表与普通方式下未搜索到路由时触发，优先度较低。
  
### component

&emsp;&emsp;转到路由时渲染的组件。

- 类型

  CustomComponent

### getParams

&emsp;&emsp;自定义从地址栏路径获取参数的方法。

- 类型

  Function
  
- 参数列表
  
  1. ```url``` (string): 地址栏路径

- 返回值

  (Object): 属性名为参数名，属性值为参数值
  
- 备注

  1. 得到的参数可以在```component```对应组件内通过```this.params.参数名```调用。

### 例子
```javascript
[
    ...
	{
		name: "Score",
		url: "/courses/:courseID/:SNo/score",
		component: ScoreComponent
	},
	{
		name: "RegExp",
		url: /^(\/?regExp)/, // 获取以regExp开头的路径
		getParams: (url) => {
			return {
				name: url.split("/").pop()
			}
		},
		component: RegExpTestComponent
	}
	...
]
```

## 使用方法

### goTo

&emsp;&emsp;跳转至指定路由。

- 参数列表

  1. ```name``` (string): 路由内置名
  2. ```options``` (object): 将传入```component```中构造函数参数列表的第一项，已实例化或构造函数未覆写的组件的将作为其```attribute```值；其中的```params```属性为路由参数对象，将来可在组件内以```this.params```的方式调用。
  3. ```urlChanged = false``` (boolean): 为```true```则不会更新history栈，为```false```反之，一般保持默认值即可，不需要特别配置。

- 返回值

  空
