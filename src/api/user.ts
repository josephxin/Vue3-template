import request from '@/utils/request'

export interface LoginParams {
  username: string
  password: string
}

export interface UserInfo {
  id: number
  username: string
  email: string
  avatar?: string
  roles: string[]
  createTime: string
}

export interface LoginResult {
  token: string
  userInfo: UserInfo
}

// 用户登录
export const login = (data: LoginParams): Promise<LoginResult> => {
  return request.post('/auth/login', data)
}

// 获取用户信息
export const getUserInfo = (): Promise<UserInfo> => {
  return request.get('/user/info')
}

// 退出登录
export const logout = (): Promise<void> => {
  return request.post('/auth/logout')
}

// 更新用户信息
export const updateUserInfo = (data: Partial<UserInfo>): Promise<void> => {
  return request.put('/user/info', data)
}