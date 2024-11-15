<script lang="ts" setup>
import { ref, onMounted, defineEmits, reactive, useTemplateRef } from 'vue'
import { clearInput, debounce } from '@/utils/tools';
import { ElMessage, type ComponentSize, type FormInstance, type FormRules } from 'element-plus'
// 消除浏览器输入框自带的记忆功能
onMounted(() => {
    clearInput();
});
type SCForm = {
    student_id: string;
    course_id: string;
};

//表单数据项
const form = ref<SCForm>({
    student_id: '',
    course_id: '',
});

const formSize = ref<ComponentSize>('default')
const ruleFormRef = useTemplateRef('ruleForm')//获取form表单dom元素

//校验规则
const rules = reactive<FormRules<SCForm>>({
    student_id: [
        { required: true, message: '请输入学生学号', trigger: 'blur' },
        { min: 6, max: 6, message: '学号为6位数', trigger: 'blur' },
    ],
    course_id: [
        { required: true, message: '请选择课程', trigger: 'blur' },
    ]

})

type OptionsItem = {
    idstr?: string
    id?: number
    label?: string
}


//重置表单
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    form.value.student_id = '';
    form.value.course_id = '';
}

const emits = defineEmits(['submit']);
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
    <el-form :model="form" @submit.prevent="addRecord__debounce(ruleFormRef)" ref="ruleForm" :rules="rules"
        class="demo-ruleForm" :size="formSize" status-icon>
        <el-form-item prop="student_id">
            <p slot="label" style="color:#fff;font-size: 18px;">学生学号</p>
            <el-input v-model="form.student_id" placeholder="请输入学号" />
        </el-form-item>
        <el-form-item prop="course_id">
            <p slot="label" style="color:#fff;font-size: 18px;">选课课程</p>
            <el-select v-model="form.course_id" placeholder="请选择课程" value-key="idstr">
                <el-option v-for="item in course_options" :key="item.idstr" :label="item.label"
                    :value="item.idstr as string" />
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

//表单样式
.el-form-item {
    margin-bottom: 20px;
}

:deep(.el-form-item__error) {
    top: 105%;
    font-size: 16px;

}
</style>
