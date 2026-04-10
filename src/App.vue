<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";
import { RouterView } from 'vue-router'
import { installUtils } from '@/utils/index'

// 安装全局工具函数
const app = getCurrentInstance()
if (app) {
  installUtils(app.appContext.app)
}

onMounted(() => {
  // 页面加载完成后的初始化操作
  console.log('App mounted')
})
</script>

<template>
  <RouterView />
</template>

<style>
/* 全局样式 */
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
