import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface UserInfo {
  id: number
  username: string
  email: string
  avatar?: string
  roles: string[]
}

export const useUserStore = defineStore('user', () => {
  // 状态
  const token = ref<string>('')
  const userInfo = ref<UserInfo | null>(null)
  
  // getters
  const isLogin = computed(() => !!token.value)
  const hasRole = computed(() => (role: string) => {
    return userInfo.value?.roles.includes(role) || false
  })
  
  // actions
  const setToken = (newToken: string) => {
    token.value = newToken
  }
  
  const setUserInfo = (info: UserInfo) => {
    userInfo.value = info
  }
  
  const login = async (credentials: { username: string; password: string }) => {
    // 模拟登录API调用
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setToken('mock-jwt-token')
        setUserInfo({
          id: 1,
          username: credentials.username,
          email: `${credentials.username}@example.com`,
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          roles: ['admin']
        })
        resolve()
      }, 1000)
    })
  }
  
  const logout = () => {
    token.value = ''
    userInfo.value = null
  }
  
  return {
    token,
    userInfo,
    isLogin,
    hasRole,
    setToken,
    setUserInfo,
    login,
    logout
  }
})