<script setup lang="ts">
import Header from '@/components/Header.vue';
import { nextTick, onMounted } from 'vue';

</script>

<template>
  <div id="simon">
    <Header />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#simon {
  position: relative;
  background: url(assets/img/background.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
