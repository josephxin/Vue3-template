/// <reference types="vite/client" />

/*
 * 可以将 env.d.ts 文件放到 src 目录下，无需再做别的配置，ts 就会引入这个文件
 * 如果放到别的地方，比如根目录，就需要调整 tsconfig.json 的配置
 */

declare interface ImportMetaEnv {
  /** 应用名 */
  readonly VITE_APP_TITLE: string;
  /** API接口路径前缀 */
  readonly VITE_API_BASE_URL: string;
  readonly VITE_UPLOAD_URL: string;
  /** 静态资源路径前缀 */
  readonly VITE_BASE_URL: string;
  readonly VITE_ENABLE_MOCK: string;
}

declare interface ImportMeta {
  /** 环境对象 */
  readonly env: ImportMetaEnv;
}
