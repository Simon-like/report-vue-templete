<script setup lang="ts">
import { ref, onMounted, defineEmits, reactive } from 'vue';
import { clearInput } from '@/utils/tools';
// 消除浏览器输入框自带的记忆功能
onMounted(() => {
    clearInput();
});
const searchForm = reactive({
    student_id: '',
    major_name: '',
    college_name: '',
});
</script>

<template>
    <div class="x-wrapper">
        <el-input v-model="searchForm.student_id" placeholder="学号查询" />
        <el-input v-model="searchForm.major_name" placeholder="院系查询" />
        <el-input v-model="searchForm.college_name" placeholder="学院查询" />
        <button class="big-cta-btn" type="submit">一键查询</button>
    </div>
</template>

<style lang="scss" scoped>
.x-wrapper {
    gap: 20px;
    padding: 20px;
    animation: topIn .5s ease-out forwards;
    opacity: 0;
    animation-delay: 0.5s;
}


.big-cta-btn {
    font-size: 16px;
    font-weight: 550;
    letter-spacing: 2px;
    flex: 1;
    height: 100%;
    border-radius: 50px;
    background: $bg-green-active-color;
    color: rgba(0, 0, 0, 0.699);
    text-transform: uppercase;
    transition: all 0.3s;
}

.big-cta-btn:hover {
    letter-spacing: 5px;
    background-color: white;
}

// el-input选择框
.el-input {
    flex: 1;
}

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