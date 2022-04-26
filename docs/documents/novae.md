# 全局方法

&emsp;&emsp;全局方法指的是从框架中导入到项目中的```Novae```实例。

## init

&emsp;&emsp;初始化框架方法。

- 参数列表

  1. ```options = {}``` (Object): 配置项
  
- 返回值

  空

## createComponent

&emsp;&emsp;创建组件的工厂方法。

- 参数列表

  - 实例化自定义组件
  
    1. (class | Function): 自定义组件的构造函数
  
  - 使用Component创建
    
	参数列表同[Component](./utils.html#component)
  
- 返回值

  (CustomComponent | Component): 创建的组件

## render

&emsp;&emsp;将```vNode```组件挂载至```parentVnode```下。

- 参数列表

  1. ```vNode``` (CustomComponent | Component): 挂载的组件
  2. ```parentNode = 根元素``` (CustomComponent | Component | string): 已存在于DOM树中的组件，或真实DOM的CSS选择器字符串；
  
- 返回值

  (CustomComponent | Component): 挂载的组件，即vNode

## addEventListener

&emsp;&emsp;监听框架事件方法。

- 参数列表

  1. ```name``` (string): 事件名
  2. ```fn``` (Function): 绑定的函数方法
  
- 返回值

  (boolean): ```true```为成功，```false```为失败

## router

&emsp;&emsp;初始化虚拟路由，配置方法请见[虚拟路由配置](./router.html#配置项)。

- 参数列表

  1. ```options``` (Object): 路由配置项
  
- 返回值

  空

## getRootDOM

&emsp;&emsp;获取开发者指定的根元素DOM。

- 参数列表

  空
  
- 返回值

  (HTMLElement): 根元素DOM
  
## components

&emsp;&emsp;服务器端渲染实例化的组件项，开发者设定后也可以从该方法获取，以进行实例化或其他用途。
  
- 类型

  (Object<string, CustomComponent>): 可实例化的组件项

## ssrComponents

&emsp;&emsp;服务器端渲染实例化的组件项
  
- 类型

  (Object<string, CustomComponent>): 从服务器端创建，前端恢复状态的组件项
  
- 备注
  
  1. 此项仅在服务器端渲染功能开启的情况下存在，若未开启则为```undefined```。