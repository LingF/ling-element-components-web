# ling-element-components

基于 `element-plus` 二次封装的 Vue3 组件库

[在线 demo](https://lingf.github.io/ling-element-components-web/#/)

## 快速使用

```cmd
npm i ling-element-components -S
```

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import LUI from 'ling-element-components'
import 'ling-element-components/style.css'

const app = createApp(App)
app.use(LUI)
```

## 依赖

- element-plus
- @element-plus/icons-vue
- wangeditor 富文本编辑器
- lodash
