/**
 * @description AXIOS接口类型
 */

/**
 * 响应数据类型
 */
export type FcResponse<T> = {
  code: number;
  msg: string;
  data: T;
};

/**
 * 任意对象类型
 */
export type IAnyObj = {
  [index: string]: unknown;
};

/**
 * Promise处理后的响应数据类型
 */
export type ApiResponse<T> = Promise<FcResponse<T>>;
