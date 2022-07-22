# 虚拟DOM

<img src="//xinrui-oss.nakupenda.net/novae/vdom.gif"/>

## 虚拟DOM工作机理

1. 将真实DOM转换为本库中虚拟DOM数据结构，降低获取DOM的时间复杂度；

2. 页面更新时使用动态规划算法计算变更前后差异，最后针对差异进行修改。