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
    student_name: string
    sex: OptionsItem
    major_name: OptionsItem
    college_name: OptionsItem
}>({
    student_id: '',
    student_name: '',
    sex: {},
    major_name: {},
    college_name: {},
});


const addRecord = () => {
    /** TODO */
    resetForm();
}
const resetForm = () => {
    form.value.college_name = {};
    form.value.major_name = {};
    form.value.sex = {};
    form.value.student_id = '';
    form.value.student_name = '';
}

const sex_options = ref<OptionsItem[]>([
    { id: 0, label: '男' },
    { id: 1, label: '女' },
    { id: 2, label: '武装直升机' },
]);
const major_options = ref<OptionsItem[]>([
    { idstr: 'M001', label: 'AMajor' },
    { idstr: 'M002', label: 'BMajor' },
    { idstr: 'M003', label: 'CMajor' },
    { idstr: 'M004', label: 'DMajor' },
    { idstr: 'M005', label: 'EMajor' },
    { idstr: 'M006', label: 'FMajor' },
])
const college_options = ref<OptionsItem[]>([
    { idstr: 'C001', label: 'ACollege' },
    { idstr: 'C002', label: 'BCollege' },
    { idstr: 'C003', label: 'CCollege' },
])
</script>

<template>
    <el-form :model="form" @submit.prevent="addRecord">
        <el-form-item required>
            <p slot="label" style="color:#fff;font-size: 18px;">学号</p>
            <el-input v-model="form.student_id" placeholder="请输入学号" />
        </el-form-item>
        <el-form-item required>
            <p slot="label" style="color:#fff;font-size: 18px;margin-right: 20px;">学生姓名</p>
            <el-input v-model="form.student_name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item>
            <p slot="label" style="color:#fff;font-size: 18px;">性别</p>
            <el-select v-model="form.sex" value-key="id">
                <el-option v-for="item in sex_options" :key="item.id" :label="item.label" :value="item" />
            </el-select>
        </el-form-item>
        <el-form-item required>
            <label slot="label" style="color:#fff;font-size: 18px;margin-right: 20px;">院系名称</label>
            <el-select v-model="form.major_name" value-key="idstr" placeholder="请选择院系">
                <el-option v-for="item in major_options" :key="item.idstr" :label="item.label" :value="item" />
            </el-select>
        </el-form-item>
        <el-form-item required>
            <p slot="label" style="color:#fff;font-size: 18px;margin-right: 20px;">学院名称</p>
            <el-select v-model="form.college_name" value-key="idstr" placeholder="请选择学院">
                <el-option v-for="item in college_options" :key="item.idstr" :label="item.label" :value="item" />
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
