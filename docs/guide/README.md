# 快速入门

## 安装

```shell
npm install novae-js
```

## 初始化

```javascript
import { Novae } from "novae-js"
Novae.init({
	root: "确定根元素的CSS选择符"
})
```

## 创建一个双向绑定数据的有状态组件

&emsp;&emsp;首先引入双向绑定数据的有状态组件类[AutoStatefulComponent](../documents/components.html#autostatefulcomponent)。

```javascript
import { AutoStatefulComponent } from "novae-js"
```

&emsp;&emsp;我们以实现一个计数器为例，新定义一个组件类，并继承于[AutoStatefulComponent](../documents/components.html#autostatefulcomponent)。

&emsp;&emsp;然后覆写其```data```方法，返回将与模板绑定的数据的变量名作为属性名、变量值为属性值的对象，以后就可以以```this.属性名```的方式获取或修改。

&emsp;&emsp;接着建立一个触发页面更新的函数，这里为```increase```方法，直接让我们的```number```变量自增，建议您将更新数据的方法定义为成员变量，这样```this```指向更为明确。

&emsp;&emsp;随后覆写```template```方法，方法返回要渲染的模板组件，可以通过JSX形式定义（需使用框架对应JSX实现的babel插件），将组件内的值以```{``` ```}```包裹，这里需要将计数值```number```与事件回调```increase```作为文本出现或绑定到对应属性。

```javascript
class TestComponent extends AutoStatefulComponent
{
	data() {
		return {
			number: 0
		}
	}
	increase = () => {
		++this.number
	}
	template() {
		return (<div class="counter">
					<p>Number: { this.number }</p>
					<p><button name="button" onclick={ this.increase }>Increase</button></p>
				</div>)
	}
}
```

&emsp;&emsp;最后运行渲染方法，将组件传入参数列表，我们上方定义的组件就会渲染至根元素下，作为其唯一的子元素。

```javascript
Novae.render(TestComponent)
```

## 加入虚拟路由

&emsp;&emsp;如果想为组件设定对应的路径，需要以下方的形式定义路由条目，配置方法见[虚拟路由](../documents/router.html#配置项)。

```javascript
Novae.router([
	{
		name: "Score",
		url: "/courses/:courseID/:SNo/score",
		component: TestComponent
	},
	{
		name: "RegExp",
		url: /^(\/?regExp)/,
		getParams: (url) => {
			return {
				name: url.split("/").pop()
			}
		},
		component: TestComponent
	}
])
```

&emsp;&emsp;配置完后您就可以在地址栏通过路径```#courses/123/456/score```（中间的两项可替换为任何合法的值，在```TestComponent```中可以通过```this.params.courseID```以及```this.params.sNo```进行获取），也可以由```#regExp/123```（```/123```可替换为其他值）转到。

&emsp;&emsp;此外也可以通过```name```字段，运行[```goTo```](../documents/router.html#goto)方法转到，该例子就可以通过```goTo("Score")```以及```goTo("RegExp")```方法转到。

## 结语

&emsp;&emsp;其他组件以及以上组件的进阶使用方法请移至[文档](../documents/)目录进行查看。
