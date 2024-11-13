<script setup lang="ts">
import { ref, onMounted, defineEmits, reactive } from 'vue';
import { clearInput } from '@/utils/tools';
// 消除浏览器输入框自带的记忆功能
onMounted(() => {
    clearInput();
});

const searchID = ref<string>('');

// 查询索引,0查学生,1查课程
const searchIndex = ref<number>(0);
const onSwitch = () => {
    searchIndex.value = +!searchIndex.value
}
</script>

<template>
    <div class="x-wrapper">
        <el-tooltip class="box-item" effect="dark" content="点击可切换" placement="top">
            <button @click="onSwitch" class="big-cta-btn switch">{{ searchIndex ? '查课程' : '查学生' }}</button>
        </el-tooltip>
        <el-input v-model="searchID" :placeholder="searchIndex ? '请输入课程id' : '请输入学生id'" />
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
    flex: 2;
    height: 100%;
    border-radius: 50px;
    background: $bg-green-active-color;
    color: rgba(0, 0, 0, 0.699);
    text-transform: uppercase;
    transition: all 0.3s;

    &.switch {
        color: #FFF;
        background: $bg-gray-color;
        flex: 1;

        &:hover {
            color: #000;
        }
    }
}

.big-cta-btn:hover {
    letter-spacing: 5px;
    background-color: white;
}

// el-input选择框
.el-input {
    flex: 2;
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