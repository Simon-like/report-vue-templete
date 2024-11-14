/**
 * @description 通用操作封装，针对单独接口的处理，并做好拦截器处理
 */

import axios from "axios";
import type { FcResponse, IAnyObj, ApiResponse } from "@/types/axios";

import {
  handleRequestHeader,
  handleAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError,
} from "./tools";

const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL,
  timeout: 5000,
});

type Fn = (data: FcResponse<any>) => unknown;

//请求拦截
axios.interceptors.request.use((config) => {
  config = handleRequestHeader(config);
  config = handleAuth(config);
  return config;
});

//响应拦截
axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    handleAuthError(response.data.code);
    handleGeneralError(response.data.code, response.data.msg);
    return response;
  },
  (err) => {
    handleNetworkError(err.response.status);
    Promise.reject(err.response);
  }
);

/**
 * GET方法封装
 * @param url
 * @param params
 * @param clearFn
 * @returns
 */
export const Get = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn
): ApiResponse<T> =>
  new Promise((resolve) => {
    instance
      .get(url, { params })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        resolve(res as FcResponse<T>);
      })
      .catch((err) => {
        resolve(err);
      });
  });

/**
 * POST方法封装
 * @param url
 * @param data
 * @param params
 * @returns
 */
export const Post = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {}
): ApiResponse<T> => {
  return new Promise((resolve) => {
    instance
      .post(url, data, { params })
      .then((result) => {
        resolve(result.data as FcResponse<T>);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

/**
 * PUT方法封装
 * @param url
 * @param data
 * @param params
 * @returns
 */
export const Put = <T>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {}
): ApiResponse<T> => {
  return new Promise((resolve) => {
    instance
      .put(url, data, { params })
      .then((result) => {
        resolve(result.data as FcResponse<T>);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

/**
 * DELETE方法封装
 * @param url
 * @param params
 * @param clearFn
 * @returns
 */
export const Delete = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn
): ApiResponse<T> =>
  new Promise((resolve) => {
    instance
      .delete(url, { params })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        resolve(res as FcResponse<T>);
      })
      .catch((err) => {
        resolve(err);
      });
  });
