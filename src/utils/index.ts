import { type App } from 'vue'
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  // let timeout: ReturnType<typeof setTimeout> | null = null

  
  return function (this: unknown, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// 深拷贝
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj
  
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T
  
  const clonedObj = {} as T
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key])
    }
  }
  
  return clonedObj
}

// 格式化文件大小
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B'
  
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 下载文件
export function downloadFile(url: string, filename?: string) {
  const link = document.createElement('a')
  link.href = url
  link.download = filename || 'download'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 生成随机ID
export function generateId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// 全局消息提示封装
export const message = {
  success: (msg: string) => ElMessage.success(msg),
  error: (msg: string) => ElMessage.error(msg),
  warning: (msg: string) => ElMessage.warning(msg),
  info: (msg: string) => ElMessage.info(msg)
}

export const notification = {
  success: (title: string, message: string) => ElNotification.success({ title, message }),
  error: (title: string, message: string) => ElNotification.error({ title, message }),
  warning: (title: string, message: string) => ElNotification.warning({ title, message }),
  info: (title: string, message: string) => ElNotification.info({ title, message })
}

export const confirm = (message: string, title: string = '提示') => {
  return ElMessageBox.confirm(message, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
}

// 安装全局工具函数
export const installUtils = (app: App) => {
  app.config.globalProperties['$utils'] = {
    debounce,
    throttle,
    deepClone,
    formatFileSize,
    downloadFile,
    generateId,
    message,
    notification,
    confirm
  }
}