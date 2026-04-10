<template>
  <div class="home-container">
    <el-container class="layout-container">
      <!-- 侧边栏 -->
      <el-aside width="200px" class="sidebar">
        <div class="logo">
          <h2>{{ appTitle }}</h2>
        </div>
        <el-menu
          :default-active="activeMenu"
          router
          class="sidebar-menu"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/home">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/dashboard">
            <el-icon><DataBoard /></el-icon>
            <span>仪表板</span>
          </el-menu-item>
          <el-sub-menu index="components">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>组件示例</span>
            </template>
            <el-menu-item index="/components/table">表格组件</el-menu-item>
            <el-menu-item index="/components/form">表单组件</el-menu-item>
            <el-menu-item index="/components/chart">图表组件</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 主内容区 -->
      <el-container>
        <!-- 头部 -->
        <el-header class="header">
          <div class="header-left">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ currentRouteName }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="header-right">
            <el-dropdown>
              <span class="user-info">
                <el-avatar :size="32" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                <span class="username">管理员</span>
                <el-icon><ArrowDown /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>

        <!-- 内容区 -->
        <el-main class="main-content">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  House,
  DataBoard,
  Grid,
  ArrowDown
} from '@element-plus/icons-vue'

const route = useRoute()
const appTitle = import.meta.env.VITE_APP_TITLE || 'Vue3 Admin'

const activeMenu = computed(() => route.path)
const currentRouteName = computed(() => route.meta?.title || '首页')
</script>

<style scoped lang="scss">
.home-container {
  height: 100vh;
  overflow: hidden;
}

.layout-container {
  height: 100%;
}

.sidebar {
  background-color: #304156;
  transition: width 0.3s;
  
  .logo {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #2b3848;
    
    h2 {
      color: #fff;
      font-size: 18px;
      margin: 0;
    }
  }
  
  .sidebar-menu {
    border: none;
    
    :deep(.el-menu-item) {
      &.is-active {
        background-color: #263445 !important;
      }
    }
  }
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  
  .header-left {
    flex: 1;
  }
  
  .header-right {
    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      
      .username {
        margin: 0 8px;
        color: #606266;
      }
    }
  }
}

.main-content {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>