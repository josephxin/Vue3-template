// 通用响应类型
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
}

// 分页参数
export interface PaginationParams {
  page: number
  size: number
  sort?: string
  order?: 'asc' | 'desc'
}

// 分页响应
export interface PaginationResponse<T = any> {
  list: T[]
  total: number
  page: number
  size: number
  pages: number
}

// 表格列配置
export interface TableColumn {
  prop: string
  label: string
  width?: number | string
  minWidth?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: boolean | 'left' | 'right'
  sortable?: boolean | 'custom'
  formatter?: (row: any, column: any, cellValue: any, index: number) => any
}

// 表单验证规则
export interface FormRule {
  required?: boolean
  message?: string
  trigger?: 'blur' | 'change' | ['blur', 'change']
  validator?: (rule: any, value: any, callback: any) => void
  pattern?: RegExp
  min?: number
  max?: number
  len?: number
}

// 路由元信息
export interface RouteMeta {
  title?: string
  requiresAuth?: boolean
  roles?: string[]
  keepAlive?: boolean
  icon?: string
}

// 上传文件类型
export interface UploadFile {
  uid: string
  name: string
  url?: string
  status: 'uploading' | 'done' | 'error' | 'removed'
  percentage?: number
  response?: any
}

// 树形数据节点
export interface TreeNode {
  id: string | number
  label: string
  children?: TreeNode[]
  disabled?: boolean
  isLeaf?: boolean
}

// 下拉选项
export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
  children?: SelectOption[]
}

// 图表配置
export interface ChartConfig {
  title?: string
  xAxis?: any
  yAxis?: any
  series?: any[]
  tooltip?: any
  legend?: any
  grid?: any
}

// 导出Excel配置
export interface ExcelExportConfig {
  filename: string
  sheets: Array<{
    sheetName: string
    data: any[]
    columns: Array<{
      title: string
      dataIndex: string
      width?: number
    }>
  }>
}