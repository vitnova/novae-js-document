# 组件

## Component

&emsp;&emsp;与真实DOM对应的虚拟DOM模板组件。

- 创建方式

  您可通过```new Component(...)```、```Novae.createComponent(...)```以及通过JSX语法（需使用本框架实现JSX的babel插件）等方式进行创建，我们更建议您采用后两种方式进行创建。
  
- 参数列表

  - 未创建真实DOM
  
    1. ```tagName``` (string): 标签名
    2. ```attributes``` (Object): 属性
    3. ```...child``` (Array<Component | CustomComponent> | ...Component | ...CustomComponent | ...string): 可以为基础组件或自定义组件的数组、也可以为基础组件或自定义组件组成的序列接在参数列表之后，也可以为字符串类型，将直接转换为标签名为Text的组件；以上所有组件都将成为该组件的子节点。
  
  - 由真实DOM创建
  
    1. ```dom``` (HTMLElement | Text): 真实DOM
	2. ```parent``` (string | HTMLElement | Component | CustomComponent): 由CSS选择器确定的父节点、真实DOM以及虚拟DOM其中的一项

  - 由CSS选择器创建
  
    1. ```props``` (Object): ```props.selector```为原生DOM的CSS选择器字符串

### tagName

&emsp;&emsp;组件标签名。

- 类型

  string
  
### attributes

&emsp;&emsp;组件属性。

- 类型

  Object
  
### text

&emsp;&emsp;纯文本组件文本内容。

- 类型

  string

### children

&emsp;&emsp;当前组件的子节点。

- 类型

  Array<Component | CustomComponent>
  
### dom

&emsp;&emsp;组件对应的真实DOM。

- 类型

  HTMLElement | Text  

### hasDOM

&emsp;&emsp;判断组件是否已挂载

- 参数列表
  
  空

- 返回值

  (boolean): ```true```为已挂载，```false```为未挂载

## CustomComponent

&emsp;&emsp;开发者自定义的模板组件，只会渲染其[template](#template)方法所生成的内容，当前组件不会出现在DOM树之中。

- 参数列表

  1. ```attributes``` (Object): 属性
  2. ```...child``` (...Component | ...CustomComponent): 子组件

### attributes

&emsp;&emsp;自定义组件的属性

- 类型

  Object

### children

&emsp;&emsp;当前组件的子节点，可采用```this.children```的方式在模板中调用。

- 类型

  Array<Component | CustomComponent>

### component

&emsp;&emsp;当前组件实际渲染的模板组件，由[template](#template)方法生成。

- 类型

  Component | CustomComponent
  
### dom

&emsp;&emsp;组件对应的真实DOM。

- 类型

  HTMLElement | Text  

### data

&emsp;&emsp;自定义组件中和模板绑定的数据，数据变量名即为属性名，可采用```this.属性名```，在模板中直接调用。

- 类型

  Object

### template

&emsp;&emsp;自定义组件获取模板的方法，创建新的模板类后需要进行覆写。

- 参数列表
  
  空

- 返回值

  (Component | CustomComponent): 实际渲染的模板组件
  
- 默认值

``` javascript
<p>请通过JSX或工厂方法等方式，使用模板样式重写当前组件的template方法</p>
```
  
- 例子

``` javascript
class TestComponent extends CustomComponent {
	template() {
		// 使用了JSX语法
		return <div>测试</div>
	}
}
```

### getTemplate

&emsp;&emsp;得到当前组件通过[template](#template)方法新创建的模板组件。

- 参数列表
  
  空

- 返回值

  (Component | CustomComponent): 实际渲染时产生的模板组件

- 备注

  1. 此方法不会将新创建的模板组件与当前自定义组件绑定。

### getComponent

&emsp;&emsp;得到当前组件真正渲染时产生的模板组件。

- 参数列表
  
  1. ```create = true``` (boolean): 为```true```时若当前自定义组件没有生成渲染时需要的模板组件，则创建后与当前组件绑定；为```false```时若不存在渲染的模板组件，也不创建

- 返回值

  (Component | CustomComponent | undefined): 实际渲染的模板组件

### render

&emsp;&emsp;渲染自定义模板组件，也就是将[template](#template)方法所生成的组件进行渲染。

- 参数列表
  
  空

- 返回值

  (Component | CustomComponent): 新渲染的模板组件
  
- 备注

   1. 执行本函数的必要前提为已通过```Novae.render```方法或虚拟路由等方式挂载至真实的DOM树中，即本方法只做一个更新操作。

### beforeCreate

&emsp;&emsp;在自定义组件创建前的回调函数，此时组件内的成员变量为空。

- 参数列表
  
  空

- 返回值

  空
  
- 例子

``` javascript
class TestComponent extends CustomComponent {
	beforeCreate() {
		// 执行您的业务逻辑
	}
}
```

### created

&emsp;&emsp;自定义组件创建后的回调函数，此时组件内的成员变量```attributes```、```data```、```children```已创建完毕。

- 参数列表
  
  空

- 返回值

  空
  
### beforeMount

&emsp;&emsp;自定义组件挂载前的回调函数，此时组件内的成员变量```attributes```、```children```、```data```、旧```component```均可访问。

- 参数列表
  
  1. ```patches``` (Patch): 组件挂载至DOM树中所需的变更步骤序列

- 返回值

  空
  
### mounted

&emsp;&emsp;自定义组件挂载后的回调函数，此时组件内的成员变量```attributes```、```children```、```data```、新```component```均可访问。

- 参数列表
  
  空

- 返回值

  空
  
### beforeUpdate

&emsp;&emsp;自定义组件更新前的回调函数，此时组件内的成员变量```attributes```、```children```、```data```、旧```component```均可访问。

- 参数列表
  
  1. ```patches``` (Patch): 组件挂载至DOM树中所需的变更步骤序列

- 返回值

  空
  
### updated

&emsp;&emsp;自定义组件更新后的回调函数，此时组件内的成员变量```attributes```、```children```、```data```、旧```component```均可访问。

- 参数列表
  
  空

- 返回值

  空
  
### beforeDispose

&emsp;&emsp;自定义组件销毁前的回调函数。

- 参数列表
  
  1. ```patches``` (Patch): 新组件挂载至DOM树中所需的变更步骤序列

- 返回值

  空
  
### disposed

&emsp;&emsp;自定义组件销毁后的回调函数。

- 参数列表
  
  空

- 返回值

  空  

## StatelessComponent

&emsp;&emsp;无状态组件，该组件继承于[CustomComponent](#CustomComponent)类。

### render

&emsp;&emsp;自定义组件销毁后的回调函数。

- 参数列表
  
  空

- 返回值

   (Component | CustomComponent | ```false```): 新渲染的模板组件，```false```表示该组件已经渲染过，故不再渲染

## ManualStatefulComponent

&emsp;&emsp;单向绑定数据的有状态组件，该组件继承于[CustomComponent](#CustomComponent)类。

### render

&emsp;&emsp;更新组件内容方法。

- 参数列表
  
  1. ```data``` (Object): 与模板绑定的数据中变更项，属性名为数据变量名，属性值为对应的变量内容

- 返回值

   (Component | CustomComponent): 新渲染的模板组件

## AutoStatefulComponent

&emsp;&emsp;双向绑定数据的有状态组件，该组件继承于[CustomComponent](#CustomComponent)类，直接修改与模板绑定的数据值即可更新界面。