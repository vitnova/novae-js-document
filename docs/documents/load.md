# 懒加载

## 开启方法

&emsp;&emsp;懒加载功能默认开启，关闭需要从[```Novae.init```](./novae.html#init)方法传入```imgLazyLoad: false```项。

## 使用方法

&emsp;&emsp;您可以在HTML模板、组件（[```Component```](./components.html#component)、[```CustomComponent```](./components.html#customcomponent)）以及其它能够出现在DOM树中的方式均可以使用懒加载功能。

&emsp;&emsp;使用时仅需要在原属性```src```前加上```data-```，组成```data-src```即可对该标签、组件引入懒加载功能。

## 触发时机

&emsp;&emsp;在视窗底部距懒加载元素小于等于100像素时会自动触发进行预加载。