<script lang="ts" setup>
import { ref, onMounted, defineEmits } from 'vue'
import { useReportStore } from '@/stores/report';
import { clearInput } from '@/utils/tools';
// 消除浏览器输入框自带的记忆功能
onMounted(() => {
    clearInput();
});

type OptionsItem = {
    idstr?: string
    id?: number
    label?: string
}

const ReportStore = useReportStore();
const form = ref<{
    student_id: string
    course: OptionsItem
}>({
    student_id: '',
    course: {},
});
const categories = ref(['数据库', '操作系统']);

const addRecord = () => {
    /** TODO */
    resetForm();
}
const resetForm = () => {
    form.value.student_id = '';
    form.value.course = {};
}

const course_options = ref<OptionsItem[]>([
    { idstr: 'C001', label: 'ACourse' },
    { idstr: 'C002', label: 'BCourse' },
    { idstr: 'C003', label: 'CCourse' },
    { idstr: 'C004', label: 'DCourse' },
    { idstr: 'C005', label: 'ECourse' },
    { idstr: 'C006', label: 'FCourse' },
    { idstr: 'C007', label: 'GCourse' },
    { idstr: 'C008', label: 'HCourse' },
])
</script>

<template>
    <el-form :model="form" @submit.prevent="addRecord">
        <el-form-item required>
            <p slot="label" style="color:#fff;font-size: 18px;">学生学号</p>
            <el-input v-model="form.student_id" placeholder="请输入学号" />
        </el-form-item>
        <el-form-item>
            <p slot="label" style="color:#fff;font-size: 18px;">选课课程</p>
            <el-select v-model="form.course" placeholder="请选择课程" value-key="idstr">
                <el-option v-for="item in course_options" :key="item.idstr" :label="item.label" :value="item" />
            </el-select>
        </el-form-item>
        <button class="big-cta-btn" type="submit">一键录入</button>
    </el-form>
</template>

<style lang="scss" scoped>
.big-cta-btn {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    width: 250px;
    height: 55px;
    border-radius: 50px;
    background: $bg-green-color;
    color: rgba(0, 0, 0, 0.699);
    text-transform: uppercase;
    transition: all 0.3s;
}

.big-cta-btn:hover {
    letter-spacing: 5px;
    background-color: white;
}

.big-cta-btn {
    animation: sideInLeft 1s ease-out forwards;
    opacity: 0;
    animation-delay: 0.5s;
}

.el-form {
    animation: sideInLeft 1s ease-out forwards;
    height: 100%;
}

// el-input选择框

:deep(.el-input__wrapper) {
    border-radius: 20px;
    background: transparent;

    border: 1.5px solid #fff;
}

:deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 1.5px $bg-green-active-color;
    border: 1.5px solid $text-green-color;
}

:deep(.el-input__inner) {
    color: #fff;
}

//下拉框
:deep(.el-select__input) {
    --el-select-multiple-input-color: #fff;
}

:deep(.el-select__placeholder) {
    color: #fff;
}

:deep(.el-select__wrapper.is-focused) {
    box-shadow: 0 0 1.5px $bg-green-active-color;
    border: 1.5px solid $text-green-color;
}

:deep(.el-select__wrapper) {
    background: transparent;
    border-radius: 20px;
    border: 1.5px solid #fff;
}

:deep(.el-select__selection .el-tag) {
    background: transparent;
    border-radius: 20px;
    border: 1.5px solid #fff;
}
</style>
