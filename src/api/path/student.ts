/**
 * @description 学生信息管理接口包
 */
import { Get, Post, Delete } from "../server";
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

/**
 * 根据ID删除一个学生信息
 * @param student_id 学生ID
 * @returns
 */
async function deleteStudentInfo(student_id: string) {
  return await Delete(`/student?student_id=${student_id}`);
}

export const StudentApi = {
  getStudentInfo__ByType,
  getStudentInfo__All,
  postStudentInfo,
  deleteStudentInfo,
};
