/**
 * @description 通用工具函数
 */
import type { IAnyObj } from "@/types/axios";

export const clearInput = () => {
  /**
   * @description // 消除浏览器输入框自带的记忆功能
   */
  let inputEl = document.getElementsByTagName("input");

  for (let i = 0; i < inputEl.length; ++i) {
    let inputNode = inputEl[i];
    inputNode.setAttribute("aria-autocomplete", "none");
  }
};

// 防抖函数
export const debounce = (
  fn: Function,
  ms: number,
  Immediate: boolean = false
) => {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function but received: " + typeof fn);
  }
  // Immediate选择是否立即执行
  let timer: any = null;
  return function (this: unknown, ...theArgs: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    if (Immediate) {
      const flag = !timer;
      flag && fn.apply(this, theArgs);
      timer = setTimeout(() => {
        timer = null;
      }, ms);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, theArgs);
        timer = null;
      }, ms);
    }
  };
};

// 深拷贝
export const deepCopy = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};
