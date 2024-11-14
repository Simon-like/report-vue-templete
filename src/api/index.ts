/**
 * @description 接口统一调用点
 */
import { StudentApi } from "./path/student";
import { SCApi } from "./path/course";

//统一导出
export const api = {
  ...StudentApi,
  ...SCApi,
};
