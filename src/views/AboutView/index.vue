<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Report from '@/components/Report.vue';
import IncomeExpenseForm from '@/components/IncomeExpenseForm.vue';
import RecordList from '@/components/RecordList.vue';
import { useReportStore } from '@/stores/report';

const ReportStore = useReportStore()

</script>

<template>
    <!--Simon section-->
    <section>
        <div class="simon-section-container">

            <div class="simon-content"> <!--Simon Content-->

                <div class="left-section">
                    <div class="left-content-container">
                        <div class="container">
                            <h1>账本系统</h1>
                            <IncomeExpenseForm />
                        </div>
                        <div class="container big-container">
                            <RecordList :records="ReportStore.records" />
                            <Report :records="ReportStore.records" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="social-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-tiktok"></i>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
/* simon Content */
.simon-content {
    padding: 15px 25px 0 25px;

    img {
        width: 90%;
        filter: drop-shadow(0 0 10px rgb(0, 225, 225)) drop-shadow(0 0 20px rgb(0, 225, 225)) drop-shadow(0 0 40px rgb(0, 225, 225)) drop-shadow(0 0 100px rgb(0, 225, 225));
    }

    .right-section {
        display: flex;
        justify-content: center;
        align-items: center;

        /* Right Section Animation */
        @keyframes rotatePlanet {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        .image-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            animation: rotatePlanet 120s linear infinite;
        }
    }

    .left-section {
        display: flex;
        align-items: center;
        z-index: 1;
        width: 100%;

        h1 {
            font-size: 3rem;
            font-weight: 800;
            color: white;
            margin: -20px 0 0 0;
        }

        .left-content-container {
            display: flex;
            align-items: center;
            gap: 100px;
            padding: 30px;
            width: 100%;


            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 30px;
                width: 40%;
            }

            .big-container {
                width: 50%;
            }
        }

    }
}

.social-icons {
    color: white;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-icons i {
    font-size: 18px;
    width: 10px;
    height: 10px;
    border: 1px solid white;
    padding: 15px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
}

.social-icons i:hover {
    color: $text-green-color;
    border-color: $text-green-color;
    transform: rotate(360deg) scale(1.1);
}

.social-icons {
    animation: bottomIn 1s ease-out forwards;
    opacity: 0;
    animation-delay: 0.2s;
}

.right-section img {
    animation: sideInRight 1s ease-out forwards;
    opacity: 0;
    animation-delay: 0.2s;
}
</style>
