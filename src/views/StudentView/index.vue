<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import IncomeForm from './IncomeForm.vue';
import RecordStudentList from './RecordStudentList.vue';
import SearchLine from './SearchLine.vue';
import { api } from '@/api/index';
import type { StudentInfo } from '@/types/databaseWeb';
import { ElMessage } from 'element-plus';

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

//加载全部学生信息
const loading_all_studentInfo = async () => {
    const res = await api.getStudentInfo__All();
    if (res.code === 1) {
        nextTick(() => Object.assign(recordsList.value, res.data));
        recordsList.value.forEach(item => {
            switch (item.sex) {
                case 0:
                    item.sex_name = '男性';
                    break;
                case 1:
                    item.sex_name = '女性';
                    break;
                case -1:
                    item.sex_name = '武装直升机';
                    break;
                default:
                    item.sex_name = '未知性别者';
                    break;
            }
        })
    } else {
        ElMessage.error(res.msg);
    }
}

// 删除学生信息
const onDelete = async (id: string) => {
    const res = await api.deleteStudentInfo(id);
    if (res.code === 1) {
        ElMessage.success('删除成功！');
        recordsList.value = [];
        await loading_all_studentInfo();
        console.log(recordsList.value);
    } else {
        ElMessage.error(res.msg);
    }
}
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
                    <SearchLine />
                    <RecordStudentList :records="recordsList" @delete="onDelete" />
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
    column-gap: 50px;
    user-select: none;

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
