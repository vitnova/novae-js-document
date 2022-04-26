# 实用工具库

&emsp;&emsp;以下工具类均可从本框架默认入口直接导入，以下方所示方式。

``` javascript
import { DataTypeTool, DebugTool, FunctionTool } from "novae-js"
```

&emsp;&emsp;此种方法获取的为已实例化的工具类实体，不需要使用new标识符进行实例化，所以您就可以直接调用对应功能方法进行使用，如DataTypeTool.getItem(..)

## DataTypeTool

&emsp;&emsp;关于数据类型的功能类

### getItem

&emsp;&emsp;链式获取某一对象中的属性，对应属性为```undefined```或```null```则返回```nullData```值。

- 参数列表

  1. ```object``` (Object): 从哪个对象获取
  2. ```item = ""``` (string): 属性路径
  3. ```nullData = ""``` (*): 默认值

- 返回值

  (*): 获取到的属性值
  
- 异常

  1. 参数类型错误：```Parameter type error```，造成原因可能是```item```参数不为```string```类型，具体见控制台调试工具的提示。

- 例子

``` javascript
let obj = {a: {b: 1}}
DataTypeTool.getItem(obj, "a.b")
// => 1
DataTypeTool.getItem(obj, "a.b.c", "fail")
// => "fail"

DataTypeTool.getItem(null, "a.b.c", "fail")
DataTypeTool.getItem(obj, 123, "fail")
// => "fail"
// object参数为任何非对象类型或item参数不为string类型将直接返回nullData值
```

- 备注

  1. ```nullData```参数项请不要传入```undefined```，Javascript视```undefined```为未传入参数项，会继续使用默认的```""```值。

### isEmpty

&emsp;&emsp;判断变量是否为有意义的值。

- 参数列表

  1. ```o``` (*): 欲判断的变量

- 返回值

  (boolean): ```true```为无意义，```false```为有意义

- 例子

``` javascript
DataTypeTool.isEmpty({})
// => true
DataTypeTool.isEmpty([])
// => true
DataTypeTool.isEmpty(null)
// => true
DataTypeTool.isEmpty(undefined)
// => true
DataTypeTool.isEmpty(false
// => true
DataTypeTool.isEmpty(+0)
// => true
DataTypeTool.isEmpty(-0)
// => true
DataTypeTool.isEmpty(NaN)
// => true
DataTypeTool.isEmpty("")
// => true
	
DataTypeTool.isEmpty({a: 1})
// => false
DataTypeTool.isEmpty("123")
// => false
DataTypeTool.isEmpty(123)
// => false
DataTypeTool.isEmpty(-1)
// => false
```

### isNotEmpty

&emsp;&emsp;判断变量是否为有意义的值，返回值与isEmpty方法相反。

- 参数列表

  1. ```o``` (*): 欲判断的变量

- 返回值

  (boolean): ```true```为有意义，```false```为无意义

### run

&emsp;&emsp;以安全形式运行函数，对应函数不存在不会阻塞下方代码的运行，未找到函数则返回```nullData```，找到函数后无论返回值是否为空均返回该值。

- 参数列表

  1. ```object``` (Object): 从哪个对象获取
  2. ```functionName = ""``` (string): 函数属性路径
  3. ```nullData = false``` (*): 默认值

- 返回值

  (*): 函数返回值
  
- 异常

  1. 参数类型错误：```Parameter type error```，造成原因可能是```functionName```参数不为```string```类型，具体见控制台调试工具的提示。  

- 例子

``` javascript
const o = { 
			fn: function() {return "success"},
			fn1: function(a) {return a}
	  }

// 在对象中找到函数
DataTypeTool.run(o, "fn")
// => "success
DataTypeTool.run(o, "fn1", 1)
// => 1

// 在对象中未找到函数
DataTypeTool.run(o, "")
// => false
DataTypeTool.run(o, "", "null")
// => "null

// 对象不是object类型
DataTypeTool.run(undefined, "")
// => false
DataTypeTool.run(1, "")
// => false
```

- 备注

  1. 建议您不要滥用此方法，此方法适用于运行在某些对象中可能已定义也可能未定义的方法，并且不会因该方法的未运行影响最后的结果，更适用于运行钩子函数这种场景。

### fromJSON

&emsp;&emsp;将JSON字符串转为对象

- 参数列表

  1. ```str``` (string): JSON字符串

- 返回值

  (Object/Array): 字符串转换后的对象或数组

- 异常

  1. JSON字符串格式错误：```Uncaught SyntaxError: Unexpected end of JSON input```

### toJSONString

&emsp;&emsp;将对象转为JSON字符串

- 参数列表

  1. ```obj``` (Object): 对象

- 返回值

  (string): JSON字符串
  
- 备注

  1. 若对象中存在属性值为```undefined```的情况，转换后的JSON字符串中将抹去对应属性，不会出现```... : undefined```的现象；
  2. 出现无法转换为JSON字符串的属性值如```function```等，同```undefined```。

### deleteItem

&emsp;&emsp;以安全方式删除对象中的属性，删除数组对应下标，并将之后的序列递补。

- 参数列表

  1. ```o``` (Object/Array): 源对象
  2. ```key``` (string/Number): 欲删除的属性或下标

- 返回值

  (boolean): ```true```为删除成功，```false```为删除失败

- 例子

``` javascript
let obj = {a: 0}, arr = [1]

DataTypeTool.deleteItem(obj, "a")
// => true
// obj = {}

DataTypeTool.deleteItem(arr, 0)
// => true
// arr = []
```

### equals

&emsp;&emsp;判断两个对象的属性以及属性值是否相等，并且可以获取差异，其中相同的定义为属性完全相同，属性值完全相同（会判别基本类型的值，而非地址）。

- 参数列表

  1. ```a``` (Object): 源对象
  2. ```b``` (Object): 欲删除的属性或下标
  3. ```getDiff = true``` (boolean): ```true```为返回两个对象的差异，```false```为只返回两对象是否相等

- 返回值

  (*):
  
  ```getDiff```为```true```的情况下，返回值为以下类型
  ``` javascript
  {
	result: true, // a与b是否相等
	add: { }, // a变为b需要新增的属性名与属性值
	change: { }, // a变为b需要改变的属性名与属性值
	delete: [] // a变为b需要删除的属性
  }
  ```
  
  ```getDiff```为```false```的情况下，返回值```true```为相等，```false```为不相等，

- 例子

``` javascript
let obj1 = {a: 0}, obj2 = {a: 0}
DataTypeTool.equals(obj1, obj2, false)
// => true

let obj3 = {
		a: {
			b: {}
		},
		d: {}
	}, obj4 = {
		a: {
			c: {}
		},
		b: {}
	}
DataTypeTool.equals(obj3, obj4)
// => {
//   result: false,
// 	 add: {
//		b: {}
//   },
//   change: {
//		a: {
//			c: {}
//		}
//   },
//	 delete: ["d"]
// }
```

- 备注

  1. 本方法只支持比较两对象的第一层属性，不会计算出对象属性的属性的差异，即若```a```与```b```的同一属性对应的值有一点差异，就会在```change```中体现出```b```对应完整的新属性。

### toString

&emsp;&emsp;将对应变量转换为字符串，如要与类型绑定请见[bindToString](#bindtostring)。

- 参数列表

  1. ```o``` (*): 源对象，可以为对象、数组也可以为基本类型
  2. ```except = []``` (Array): 不转为字符串的属性名数组，```o```为基本类型或数组则不生效

- 返回值

  (string): 转换后的字符串
  
- 异常

  1. 参数类型错误：```Parameter type error```，造成原因可能是```except```参数不为```Array```类型，具体见控制台调试工具的提示。    

- 例子

``` javascript
const obj = {a: 0, b: {}}
DataTypeTool.toString(obj, ["b"])
// => "{a: 0}"

const arr = [1, 2]
DataTypeTool.toString(arr)
// => "[1,2]"

DataTypeTool.toString(123)
// => "123"
```

- 备注

  1. 本方法会排除掉```function```类型的属性值。

### bindToString

&emsp;&emsp;将[toString](#tostring)方法绑定到对象的toString方法上。

- 参数列表

  1. ```except = []``` (Array): 不转为字符串的属性名数组

- 返回值

  (function): 与对象绑定的toString方法
  
- 异常

  1. 参数类型错误：```Parameter type error```，造成原因可能是```except```参数不为```Array```类型，具体见控制台调试工具的提示。    

- 例子

``` javascript
const obj = {a: 0, b: {}}
obj.toString = DataTypeTool.bindToString(["b"])
console.log(obj)
// => "{a: 0}"

// 与ES6中class绑定
class A {
	...
	toString() {
		return DataTypeTool.bindToString(...)
	}
	...
}

// ES6前与构造函数绑定
function B() {...}
B.prototype.toString = DataTypeTool.bindToString(...)
```

- 备注

  1. 生成的字符串会排除掉```function```类型的属性值。

### inherit

&emsp;&emsp;在不使用ES6规范情况下，以寄生组合式方法实现类继承。

- 参数列表

  1. ```father``` (Function): 父类构造函数
  2. ```child``` (Function): 子类构造函数

- 返回值

  (Function): 继承后的子类构造函数

- 异常

  1. 参数类型错误：```Parameter type error```，造成原因可能是```father```参数或```child```参数不为```Function```类型，具体见控制台调试工具的提示。    

- 例子

``` javascript
function A() {}
function B() {}

let newB = DataTypeTool.inherit(A, B)
new newB() instanceof A
// => true
```

- 备注

  1. 此方法会改变原```child```参数，即返回值与```child```参数相同。

## DebugTool

&emsp;&emsp;框架调试及环境诊断工具。

### isInBrowser

&emsp;&emsp;判断代码运行环境是否为浏览器。

- 参数列表

  空

- 返回值

  (boolean): ```true```为在浏览器中，```false```为不在浏览器中

### isInNode

&emsp;&emsp;判断代码运行环境是否为Node.js。

- 参数列表

  空

- 返回值

  (boolean): ```true```为在Node.js中，```false```为不在Node.js中

## FunctionTool

&emsp;&emsp;针对函数的工具包。

### debounce

&emsp;&emsp;防抖函数，将传入的函数延迟执行，若延迟等待过程中再次调用传入的函数则顺延重新计时，适用于监听scroll事件这种频繁触发的场景。

- 参数列表

  1. ```fn``` (Function): 延迟等待的函数方法
  2. ```delay = 2000``` (Number): 等待时间(ms)

- 返回值

  (Function): 加入防抖后的函数方法

- 例子

``` javascript
function A() {console.log("A")}

const newA = DataTypeTool.debounce(A)
newA()

setTimeout(newA, 1000)
// 3000ms后 => "A"
```

- 备注

  1. 此方法不会改变原函数方法，使用防抖功能请调用本方法返回的新函数方法。