<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
const props = defineProps({
    records: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <el-table :data="props.records">
        <el-table-column prop="student_id" label="学号" />
        <el-table-column prop="student_name" label="姓名" />
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="major_name" label="院系" />
        <el-table-column prop="college_name" label="学院" />
    </el-table>
</template>

<style lang="scss" scoped>
.el-table {
    width: 700px;
    height: 100%;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #fff;
    animation: bottomIn 1s ease-out forwards;
    opacity: 0;
    animation-delay: 0.5s;
    --el-table-header-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    --el-table-header-text-color: #fff;
}

:deep(.el-table__inner-wrapper) {
    border-radius: 20px;
}
</style>