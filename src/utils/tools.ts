/**
 * @description 通用工具函数
 */

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
