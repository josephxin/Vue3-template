import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStore } from '@/stores/user'

// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    
    // 添加token到请求头
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`
    }
    
    // 处理GET请求参数
    if (config.method?.toLowerCase() === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now() // 防止缓存
      }
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { data } = response
    
    // 根据后端接口规范调整
    if (data.code === 200 || data.success) {
      return data.data || data
    } else {
      // 业务错误
      ElMessage.error(data.message || '请求失败')
      return Promise.reject(new Error(data.message || '请求失败'))
    }
  },
  (error) => {
    const { response } = error
    
    if (response) {
      const { status, data } = response
      
      switch (status) {
        case 400:
          ElMessage.error(data.message || '请求参数错误')
          break
        case 401:
          ElMessageBox.confirm('登录已过期，请重新登录', '提示', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            const userStore = useUserStore()
            userStore.logout()
            window.location.href = '/login'
          })
          break
        case 403:
          ElMessage.error('没有权限访问')
          break
        case 404:
          ElMessage.error('请求的资源不存在')
          break
        case 500:
          ElMessage.error('服务器内部错误')
          break
        default:
          ElMessage.error(data?.message || '网络错误')
      }
    } else {
      // 网络错误
      ElMessage.error('网络连接失败，请检查网络设置')
    }
    
    return Promise.reject(error)
  }
)

export default request