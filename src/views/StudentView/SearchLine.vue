<script setup lang="ts">
import { ref, onMounted, defineEmits, reactive } from 'vue';
import { clearInput } from '@/utils/tools';
// 消除浏览器输入框自带的记忆功能
onMounted(() => {
    clearInput();
});

//输入项数据
const searchForm = reactive({
    major_id: '',
    department_id: '',
    college_id: '',
});

const emits = defineEmits(['search']);

const onSearch = () => {
    emits('search', searchForm);
};
</script>

<template>
    <div class="x-wrapper">
        <el-input v-model="searchForm.major_id" placeholder="按专业查询" />
        <el-input v-model="searchForm.department_id" placeholder="按院系查询" />
        <el-input v-model="searchForm.college_id" placeholder="按学院查询" />
        <button class="big-cta-btn" type="submit" @click="onSearch">一键查询</button>
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