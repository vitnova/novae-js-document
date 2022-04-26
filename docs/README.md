---   
home: true
actions: 
  - text: 快速开始
    link: /guide/
    type: primary
  - text: 查看文档
    link: /documents/
    type: secondary	
footer: MIT Licensed | Copyright © 2022 Li Xinrui
---
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