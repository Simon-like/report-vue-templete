/**
 * @description 选课信息管理接口包
 */
import { Get, Post, Delete } from "../server";
import type { ApiResponse } from "@/types/axios";
import type { SCInfo } from "@/types/databaseWeb";

/**
 * 根据课程查询学生选课数据
 * @param course_id 课程ID
 * @returns
 */
async function getSCInfo__ByCourse(course_id: string): ApiResponse<SCInfo[]> {
  return await Get<SCInfo[]>(`/scc?course_id=${course_id}`);
}

/**
 * 根据学生查询课程选课数据
 * @param student_id 学生ID
 * @returns
 */
async function getSCInfo__ByStudent(student_id: string): ApiResponse<SCInfo[]> {
  return await Get<SCInfo[]>(`/scs?student_id=${student_id}`);
}

/**
 * 查询全部选课信息
 * @returns
 */
async function getSCInfo__All(): ApiResponse<SCInfo[]> {
  return await Get<SCInfo[]>("/sc");
}

type SCForm = {
  student_id: string;
  course_id: string;
};

/**
 * 新增选课信息
 * @param data
 * @returns
 */
async function postSCInfo(data: SCForm) {
  return await Post("/sc", data);
}

/**
 * 根据id删除选课信息
 * @param id ID
 * @returns
 */
async function deleteSCInfo(id: number) {
  return await Delete(`/sc/${id}`);
}

export const SCApi = {
  getSCInfo__ByCourse,
  getSCInfo__ByStudent,
  getSCInfo__All,
  postSCInfo,
  deleteSCInfo,
};
