<script setup lang="ts">
/**
 * @description 选课信息管理入口界面
 */
import { api } from '@/api';
import { nextTick, onMounted, ref } from 'vue';
import IncomeForm from './IncomeForm.vue';
import RecordCourseList from './RecordCourseList.vue';
import SearchLine from './SearchLine.vue';
import { ElMessage } from 'element-plus';
import type { SCInfo } from '@/types/databaseWeb';


//表格数据
const recordsList = ref<{
    id: number
    student_name: string
    sex: number
    sex_name: string
    course_name: string
    classroom_id: string
}[]>([]);

type SCForm = {
    student_id: string;
    course_id: string;
};

//录入信息
const onSubmit = async (data: SCForm) => {
    const res = await api.postSCInfo(data);
    if (res.code === 1) {
        ElMessage.success('你好棒喔！');
        await loading_all_SCInfo();
    } else {
        ElMessage.error(res.msg);
    }
}

/**
 * 响应数据格式化
 * @param res 响应返回的学生信息数组
 */
function records_formatting(res: SCInfo[]) {
    recordsList.value = []
    res.forEach(item => {
        let sex_name = '';
        switch (item.sex) {
            case 0:
                sex_name = '男性';
                break;
            case 1:
                sex_name = '女性';
                break;
            case -1:
                sex_name = '武装直升机';
                break;
            default:
                sex_name = '未知性别者';
                break;
        }
        recordsList.value.push({ ...item, sex_name });
    })//获取数据转化格式
}


//加载全部选课信息
const loading_all_SCInfo = async () => {
    const res = await api.getSCInfo__All()
    if (res.code === 1) {
        records_formatting(res.data);
    } else {
        ElMessage.error(res.msg);
    }
}

// 删除选课信息
const onDelete = async (id: number) => {
    const res = await api.deleteSCInfo(id);
    if (res.code === 1) {
        ElMessage.success('删除成功！');
        await loading_all_SCInfo();
    } else {
        ElMessage.error(res.msg);
    }
}

//按课程号查询
const onSearchByCourse = async (id: string) => {
    const res = await api.getSCInfo__ByCourse(id);
    if (res.code === 1) {
        ElMessage.success('查询成功！');
        records_formatting(res.data);
    } else {
        ElMessage.error(res.msg);
    }
}

//按学号查询
const onSearchByStudent = async (id: string) => {
    const res = await api.getSCInfo__ByStudent(id);
    if (res.code === 1) {
        ElMessage.success('查询成功！');
        records_formatting(res.data);
    } else {
        ElMessage.error(res.msg);
    }
}

//进入页面时加载所有数据
onMounted(loading_all_SCInfo);
</script>

<template>
    <section>
        <div class="simon-section-container">
            <div class="simon-content">
                <div class="income y-wrapper">
                    <h3>选课信息管理</h3>
                    <IncomeForm @submit="onSubmit" />
                </div>
                <div class="table y-wrapper">
                    <SearchLine @search_all="loading_all_SCInfo" @search_by-course="onSearchByCourse"
                        @search_by-student="onSearchByStudent" />
                    <RecordCourseList :records="recordsList" @delete="onDelete" />
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.simon-content {
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    user-select: none;
    height: 100%;
    width: 100%;
    column-gap: 50px;

    .income {
        justify-content: center;
        gap: 20px;
        padding: 50px;
        border: 2px solid #fff;
        box-shadow: -10px -10px 10px rgba(0, 0, 0, .3);
        border-radius: 20px;
        animation: sideInLeft 1s ease-out forwards;
    }

    h3 {
        font-size: 2rem;
        font-weight: 800;
        color: $text-green-color;
        margin: -20px 0 0 0;
    }

}
</style>