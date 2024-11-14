/**
 * @description 接口统一调用点
 */
import { StudentApi } from "./path/student";
import { SCApi } from "./path/course";

export const api = {
  ...StudentApi,
  ...SCApi,
};
