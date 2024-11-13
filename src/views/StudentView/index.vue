<script setup lang="ts">
import IncomeForm from './IncomeForm.vue';
import RecordStudentList from './RecordStudentList.vue';
import SearchLine from './SearchLine.vue';
</script>

<template>
    <section>
        <div class="simon-section-container">
            <div class="simon-content">
                <div class="y-wrapper">
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
    user-select: none;

    h3 {
        font-size: 2rem;
        font-weight: 800;
        color: $text-green-color;
        margin: -20px 0 0 0;
    }
}
</style>
