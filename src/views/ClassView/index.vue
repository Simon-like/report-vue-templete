<script setup lang="ts">
import IncomeForm from './IncomeForm.vue';
import RecordCourseList from './RecordCourseList.vue';
import SearchLine from './SearchLine.vue';
</script>

<template>
    <section>
        <div class="simon-section-container">
            <div class="simon-content">
                <div class="income y-wrapper">
                    <h3>选课信息管理</h3>
                    <IncomeForm />
                </div>
                <div class="table y-wrapper">
                    <SearchLine />
                    <RecordCourseList :records="[]" />
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
    min-height: 80%;
    column-gap: 50px;

    .income {
        justify-content: center;
        gap: 60px;
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