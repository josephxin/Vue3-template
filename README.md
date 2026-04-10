# Vue3 + Element Plus 管理后台模板

基于 Vue 3、TypeScript、Vite、Element Plus、Pinia、Vue Router 构建的现代化管理后台模板。

## ✨ 特性

- ⚡️ **快速开发** - 基于 Vite 构建，极速的热重载和构建速度
- 🎯 **TypeScript** - 完整的 TypeScript 支持，提供更好的开发体
- 🎨 **Element Plus** - 丰富的 UI 组件库，美观易用
- 📦 **组件化** - 高度可复用的组件设计
- 🏗️ **模块化** - 清晰的目录结构和代码组织
- 🔐 **权限控制** - 基于路由和角色的权限管理系统
- 📱 **响应式** - 完美适配各种屏幕尺寸
- 🌍 **国际化** - 支持多语言切换
- 🎪 **主题定制** - 灵活的主题配置系统

## 🛠️ 技术栈

### 核心框架

- [Vue 3](https://v3.vuejs.org/) - 渐进式 JavaScript 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

### 状态管理 & 路由

- [Pinia](https://pinia.vuejs.org/) - Vue 官方推荐的状态管理库
- [Vue Router](https://router.vuejs.org/) - Vue.js 官方路由

### UI 组件库

- [Element Plus](https://element-plus.org/) - 基于 Vue 3 的桌面端组件库

### 工具库

- [Axios](https://axios-http.com/) - HTTP 请求库
- [Lodash-es](https://lodash.com/) - JavaScript 实用工具库
- [Day.js](https://day.js.org/) - 轻量级日期处理库
- [ECharts](https://echarts.apache.org/) - 强大的图表库

### 开发工具

- [ESLint](https://eslint.org/) - 代码质量检查
- [Prettier](https://prettier.io/) - 代码格式化
- [Vue DevTools](https://devtools.vuejs.org/) - Vue 开发者工具

### 扩展插件

- [ahooks-vue](https://ahooks-vue.js.org/) - Vue 3 Hooks 库
- [NProgress](https://ricostacruz.com/nprogress/) - 页面加载进度条
- [XLSX](https://sheetjs.com/) - Excel 文件处理
- [Vue ECharts](https://github.com/ecomfe/vue-echarts) - ECharts Vue 组件
- [CodeMirror](https://codemirror.net/) - 代码编辑器
- [FileSaver](https://github.com/eligrey/FileSaver.js/) - 文件保存

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0 或 pnpm >= 6.0.0

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

### 代码检查

```bash
# ESLint 检查
npm run lint

# Prettier 格式化
npm run format

# TypeScript 类型检查
npm run type-check
```

## 📁 项目结构

```
src/
├── api/           # API 接口
├── assets/        # 静态资源
│   └── styles/    # 样式文件
├── components/    # 公共组件
├── router/        # 路由配置
├── stores/        # 状态管理
├── types/         # 类型定义
├── utils/         # 工具函数
├── views/         # 页面组件
├── App.vue        # 根组件
└── main.ts        # 入口文件
```

## 🔧 配置说明

### 环境变量

项目支持多环境配置：

- `.env.development` - 开发环境
- `.env.production` - 生产环境

### Vite 配置

主要配置项包括：

- 开发服务器配置（端口、代理等）
- 构建优化配置
- CSS 预处理器配置
- 路径别名配置

### TypeScript 配置

- 严格的类型检查
- 路径映射支持
- 现代 ES 特性支持

## 主要技术栈及版本

``` json
"ahooks-vue": "^0.15.1",
"axios": "^1.15.0",
"dayjs": "^1.11.20",
"echarts": "^5.5.1",
"element-plus": "^2.13.6",
"lodash-es": "^4.18.1",
"pinia": "^3.0.4",
"vue": "^3.5.32",
"vue-echarts": "^8.0.1",
"vue-router": "^4.6.4",
"vite": "^6.4.2",
"typescript": "~5.8.3",
"eslint": "^9.39.4",
```

## git 提交格式

```json
[
  "feat", // 新增特性(feature)
  "fix", //  修复bug
  "perf", //  优化相关，比如提升性能、体验
  "style", //  代码格式修改，不改变代码逻辑，如修改了空格、格式缩进、文件位置等等
  "refactor", //  代码重构，没有加新功能或者修复bug
  "revert", //   代码回退
  "chore", //  增加依赖库、工具等
  "build", // 变更项目构建或外部依赖，例如(webpack,gulp,npm 等)
  "test", // 测试相关，单元测试流程的开发
  "ci", // 更改持续继承软件的配置文件和 package 中的 scripts 命令
  "docs" // 仅仅修改了文档，比如README等等
]
```

## 常见问题

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

感谢以下开源项目的贡献：

- [Vue.js](https://vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [Vite](https://vitejs.dev/)
- 以及所有依赖库的开发者们
