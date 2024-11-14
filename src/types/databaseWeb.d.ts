/**
 * @description 数据库教务系统数据类型
 */

/**
 * 学生信息类型
 */
export type StudentInfo = {
  student_id: string;
  student_name: string;
  sex: number; //男0，女1
  college_id: string;
  major_id: string;
};

/**
 * 班级信息类型
 */
export type CourseInfo = {
  course_id: string;
  course_name: string;
  classroom_id: string;
};

/**
 * 选课信息类型
 */
export type SCInfo = {
  student_name: string;
  sex: number;
  course_name: string;
  classroom_id: string;
};
