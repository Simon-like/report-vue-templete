<script setup lang="ts">
/**
 * @description 学生信息管理入口界面
 */
import { nextTick, onMounted, ref } from 'vue';
import IncomeForm from './IncomeForm.vue';
import RecordStudentList from './RecordStudentList.vue';
import SearchLine from './SearchLine.vue';
import { api } from '@/api/index';
import type { StudentInfo } from '@/types/databaseWeb';
import { ElMessage } from 'element-plus';

// 表格数据
const recordsList = ref<{
    student_id: string
    student_name: string
    sex: number
    sex_name: string
    college_id: string
    major_id: string
}[]>([]);


//录入信息
const onSubmit = async (data: StudentInfo) => {
    const res = await api.postStudentInfo(data);
    if (res.code === 1) {
        ElMessage.success('你好棒喔！');
        await loading_all_studentInfo();
    } else {
        ElMessage.error(res.msg);
    }
}


/**
 * 响应数据格式化
 * @param res 响应返回的学生信息数组
 */
function records_formatting(res: StudentInfo[]) {
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

//加载全部学生信息
const loading_all_studentInfo = async () => {
    const res = await api.getStudentInfo__All();
    if (res.code === 1) {
        records_formatting(res.data);
    } else {
        ElMessage.error(res.msg);
    }
}

// 删除学生信息
const onDelete = async (id: string) => {
    const res = await api.deleteStudentInfo(id);
    if (res.code === 1) {
        ElMessage.success('删除成功！');
        await loading_all_studentInfo();
    } else {
        ElMessage.error(res.msg);
    }
}

interface SearchData {
    major_id: string
    department_id: string
    college_id: string
}

//按类型查询学生信息
const onSearch = async (data: SearchData) => {
    const res = await api.getStudentInfo__ByType(data.major_id, data.department_id, data.college_id);
    if (res.code === 1) {
        records_formatting(res.data);
        ElMessage.success('查询成功！');
    } else {
        ElMessage.error(res.msg);
    }
};

//进入页面时加载所有数据
onMounted(loading_all_studentInfo);
</script>

<template>
    <section>
        <div class="simon-section-container">
            <div class="simon-content">
                <div class="income y-wrapper">
                    <h3>学生信息管理</h3>
                    <IncomeForm @submit="onSubmit" />
                </div>
                <div class="y-wrapper">
                    <SearchLine @search="onSearch" />
                    <RecordStudentList :records="recordsList" @delete="onDelete" />
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.simon-content {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 50px;
    user-select: none;
    height: 100%;
    width: 100%;

    .income {
        justify-content: center;
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
