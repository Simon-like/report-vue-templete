<script setup lang="ts">
import type { SCInfo } from '@/types/databaseWeb';
import { ref, computed, defineProps, defineEmits } from 'vue';
const props = defineProps<{
    records: SCInfo[]
}>()

const emits = defineEmits(['delete']);

const handleDelete = (index: number) => {
    emits('delete', props.records[index].id);
};
</script>

<template>
    <el-table :data="props.records">
        <el-table-column prop="student_name" label="姓名" />
        <el-table-column prop="sex_name" label="性别" />
        <el-table-column prop="course_name" label="所选课程" />
        <el-table-column prop="classroom_id" label="教室" />
        <el-table-column label="Operations">
            <template #default="scope">
                <el-button size="small" type="danger" @click="handleDelete(scope.$index)">
                    Delete
                </el-button>
            </template>
        </el-table-column>
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

:deep(.cell) {
    color: #fff;
    font-size: 16px;
    transition: .2s ease;

}

:deep(.el-table__body tr:hover>td.el-table__cell) {
    .cell {
        color: #000;
    }
}
</style>