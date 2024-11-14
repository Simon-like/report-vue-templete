/**
 * @description 学生信息管理接口包
 */
import { Get, Post, Delete, Put } from "../server"; //必须导入
import type { ApiResponse } from "@/types/axios";
import type { StudentInfo } from "@/types/databaseWeb";

/**
 * 根据专业，院系，学院查询学员信息
 * @param major_id 专业ID
 * @param department_id 院系ID
 * @param college_id 学院ID
 * @returns
 */
async function getStudentInfo__ByType(
  major_id: string = "",
  department_id: string = "",
  college_id: string = ""
): ApiResponse<StudentInfo[]> {
  return await Get<StudentInfo[]>(
    `/student?major_id=${major_id}&department_id=${department_id}&college_id=${college_id}`
  );
  //对于get请求通常使用路径参数，delete同；
  //ApiResponse<T>定义的是返回数据类型，没有就不填，里面的<T>和Get方法前的<T>的泛型类型请保持一致
  //表示后端返回数据中：{"code":1,"msg":"success","data":[]}里面的data的数据类型
}

/**
 * 查询全部学生信息
 * @returns
 */
async function getStudentInfo__All(): ApiResponse<StudentInfo[]> {
  return await Get<StudentInfo[]>("/student");
}

/**
 * 新增一个学生信息
 * @param data 学生信息对象
 * @returns
 */
async function postStudentInfo(data: StudentInfo) {
  return await Post("/student", data);
}
//对于post请求，通常把数据打包到一个对象里放到请求体body里面，此处对对象做了类型定义格式为:
// type StudentInfo = {
//   student_id: string;
//   student_name: string;
//   sex: number;
//   college_id: string;
//   major_id: string;
// };

/**
 * 根据ID删除一个学生信息
 * @param student_id 学生ID
 * @returns
 */
async function deleteStudentInfo(student_id: string) {
  return await Delete(`/student?student_id=${student_id}`);
}

// 最后不要忘了导出
export const StudentApi = {
  getStudentInfo__ByType,
  getStudentInfo__All,
  postStudentInfo,
  deleteStudentInfo,
};
