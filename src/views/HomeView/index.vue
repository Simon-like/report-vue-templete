<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Report from '@/components/Report.vue';
import IncomeExpenseForm from '@/components/IncomeExpenseForm.vue';
import RecordList from '@/components/RecordList.vue';
import { useReportStore } from '@/stores/report';
import { ElMessage } from 'element-plus'
import flowers from '@/components/flowers.vue';

const ReportStore = useReportStore();

const onCall = () => {
  ElMessage({
    message: 'SIMON感谢您',
    type: 'success'
  });
  flowers_show.value = true;
};

const flowers_show = ref<boolean>(false);

</script>

<template>
  <!--Simon section-->
  <section>
    <div class="simon-section-container">
      <div class="y-wrapper">
        <div class="simon-content"> <!--Simon Content-->
          <div class="left-section">
            <div class="container">
              <h1>Simon报表系统</h1>
              <p>致力于构建精美高效的前端页面，一站式解决后台页面搭建业务情景</p>
              <p>给SIMON点个赞吧！</p>
              <button class="big-cta-btn" @click="onCall">
                给SIMON点赞
                <!-- 花 -->
                <div class="flowers-wrapper" v-if="flowers_show">
                  <flowers />
                </div>
              </button>
            </div>
          </div>

          <div class="right-section">
            <div class="image-wrap">
              <img src="../../assets/img/planet.png" alt="planet image">
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* simon Content */
.y-wrapper {
  height: 100%;
  padding: 50px;
}

.simon-content {
  padding: 15px 25px 0 25px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  flex: 1;

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
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      user-select: none;

      p {
        width: 50%;
        font-size: 1.2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgba(255, 255, 255, 0.6);
        text-indent: 2.4rem;
      }
    }

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: white;
      margin: -20px 0 0 0;
    }

    .big-cta-btn {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 2px;
      width: 250px;
      height: 55px;
      border-radius: 50px;
      background: $bg-green-color;
      color: rgba(0, 0, 0, 0.699);
      text-transform: uppercase;
      transition: all 0.3s;
      position: relative;
    }

    .flowers-wrapper {
      z-index: -99;
      position: absolute;
      bottom: 0;
      right: 0;
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
