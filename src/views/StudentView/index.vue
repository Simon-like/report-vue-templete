<script setup lang="ts">
import { onMounted } from 'vue';
import IncomeForm from './IncomeForm.vue';
import RecordStudentList from './RecordStudentList.vue';
import SearchLine from './SearchLine.vue';
import { api } from '@/api/index';

onMounted(api.getStudentInfo__All);
</script>

<template>
    <section>
        <div class="simon-section-container">
            <div class="simon-content">
                <div class="income y-wrapper">
                    <h3>学生信息管理</h3>
                    <IncomeForm />
                </div>
                <div class="y-wrapper">
                    <SearchLine />
                    <RecordStudentList :records="[]" />
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
