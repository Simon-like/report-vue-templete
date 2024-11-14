<script lang="ts" setup>
/**
 * @description 表单录入组件
 */
import { ref, onMounted, defineEmits, reactive } from 'vue'
import { clearInput, debounce } from '@/utils/tools';
import type { StudentInfo } from '@/types/databaseWeb';

import { ElMessage, type ComponentSize, type FormInstance, type FormRules } from 'element-plus'


// 表单数据
const form = ref<StudentInfo>({
    student_id: '',
    student_name: '',
    sex: -1,
    college_id: '',
    major_id: '',
});

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()

//校验规则
const rules = reactive<FormRules<StudentInfo>>({
    student_id: [
        { required: true, message: '请输入学生学号', trigger: 'blur' },
        { min: 6, max: 6, message: '学号为6位数', trigger: 'blur' },
    ],
    student_name: [
        { required: true, message: '请输入学生姓名', trigger: 'blur' },
        { min: 1, max: 6, message: '锤子，有这么长的姓名吗？', trigger: 'blur' },
    ],
    sex: [
        {
            required: true,
            message: '请选择性别',
            trigger: 'change',
        },
    ],
    major_id: [
        {
            required: true,
            message: '请选择专业',
            trigger: 'change',
        },
    ],
    college_id: [
        {
            required: true,
            message: '请选择院系',
            trigger: 'change',
        },
    ],

})


const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    //formEl.resetFields();
    form.value.student_id = '';
    form.value.student_name = '';
    form.value.sex = -1;
    form.value.college_id = '';
    form.value.major_id = '';
}

const emits = defineEmits(['submit']);

onMounted(() => {
    clearInput();// 消除浏览器输入框自带的记忆功能
});


/**
 * 提交记录,做防抖处理
 */
const addRecord__debounce = debounce(async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            emits('submit', form.value);
            resetForm(formEl);
        } else {
            ElMessage.error('尼姆的，检查好了再提交');
        }
    });
}, 1000, true);

// 下拉框选项数据类型
type OptionsItem = {
    idstr?: string
    id?: number
    label?: string
    disabled?: boolean
}
const sex_options = ref<OptionsItem[]>([
    { id: 0, label: '男' },
    { id: 1, label: '女' },
    { id: -1, label: '武装直升机' },
]);
const major_options = ref<OptionsItem[]>([
    { idstr: 'M001', label: 'AMajor', disabled: false },
    { idstr: 'M002', label: 'BMajor', disabled: false },
    { idstr: 'M003', label: 'CMajor', disabled: false },
    { idstr: 'M004', label: 'DMajor', disabled: false },
    { idstr: 'M005', label: 'EMajor', disabled: false },
    { idstr: 'M006', label: 'FMajor', disabled: false },
]);
const college_options = ref<OptionsItem[]>([
    { idstr: 'C001', label: 'ACollege', disabled: false },
    { idstr: 'C002', label: 'BCollege', disabled: false },
    { idstr: 'C003', label: 'CCollege', disabled: false },
]);

type MajorCollegeMap = {
    [collegeId: string]: string[];
};

// 专业->学院映射表，多个专业对应一个学院
const major_college_Map: MajorCollegeMap = {
    'C001': ['M001', 'M002', 'M003', 'M004'],
    'C002': ['M005'],
    'C003': ['M006']
}

// 专业选项点击事件
const onChooseMajor = (idstr: string) => {
    //选择时检查学院是否正确对应
    let id = form.value.college_id;
    id && !major_college_Map[id].includes(idstr) && (form.value.college_id = '')
    //对学院选项进行禁用区分
    college_options.value.forEach(item => {
        if (major_college_Map[item.idstr as string].includes(idstr)) item.disabled = false;
        else item.disabled = true;
    });

}
// 学院选项点击事件
const onChooseCollege = (idstr: string) => {
    let id = form.value.major_id;
    id && !major_college_Map[idstr].includes(id) && (form.value.major_id = '')
    major_options.value.forEach(item => {
        if (major_college_Map[idstr].includes(item.idstr as string)) item.disabled = false;
        else item.disabled = true;
    });
}
</script>

<template>
    <el-form :model="form" @submit.prevent="addRecord__debounce(ruleFormRef)" ref="ruleFormRef" :rules="rules"
        class="demo-ruleForm" :size="formSize" status-icon>
        <el-form-item prop="student_id">
            <p slot="label" style="color:#fff;font-size: 18px;">学号</p>
            <el-input v-model="form.student_id" placeholder="请输入学号" />
        </el-form-item>
        <el-form-item prop="student_name">
            <p slot="label" style="color:#fff;font-size: 18px;margin-right: 20px;">学生姓名</p>
            <el-input v-model="form.student_name" placeholder="请输入姓名" />
        </el-form-item>
        <!-- 下拉选择框 -->
        <el-form-item prop="sex">
            <p slot="label" style="color:#fff;font-size: 18px;">性别</p>
            <el-select v-model="form.sex" value-key="id">
                <el-option v-for="item in sex_options" :key="item.id" :label="item.label" :value="item.id as number" />
            </el-select>
        </el-form-item>
        <!-- 下拉选择框 -->
        <el-form-item prop="major_id">
            <label slot="label" style="color:#fff;font-size: 18px;margin-right: 20px;">所在专业</label>
            <el-select v-model="form.major_id" value-key="idstr" placeholder="请选择专业">
                <el-option v-for="item in major_options" :key="item.idstr" :label="item.label" :disabled="item.disabled"
                    @click="onChooseMajor(item.idstr as string)" :value="item.idstr as string" />
            </el-select>
        </el-form-item>
        <el-form-item prop="college_id">
            <p slot="label" style="color:#fff;font-size: 18px;margin-right: 20px;">所在学院名称</p>
            <el-select v-model="form.college_id" value-key="idstr" placeholder="请选择学院">
                <el-option v-for="item in college_options" :key="item.idstr" :label="item.label"
                    @click="onChooseCollege" :disabled="item.disabled" :value="item.idstr as string" />
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
    width: 300px;
    height: 55px;
    border-radius: 50px;
    background: $bg-green-color;
    color: rgba(0, 0, 0, 0.699);
    text-transform: uppercase;
    transition: all 0.3s;
    margin-top: 20px;
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
    color: rgba(255, 255, 255, 0.8);
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


//表单样式
.el-form-item {
    margin-bottom: 20px;
}

:deep(.el-form-item__error) {
    top: 105%;
    font-size: 16px;

}
</style>
