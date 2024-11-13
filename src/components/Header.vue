<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted } from 'vue';
import { ElMessage } from 'element-plus';
const open = () => {
    ElMessage({
        message: '啥也没有',
        type: 'success',
    });
};
const nav_list = ref([
    { text: 'Home', active: true, id: 0, src: '/' },
    { text: 'Student', active: false, id: 1, src: '/student' },
    { text: 'Class', active: false, id: 2, src: '/class' },
]);

const onSwitch = (index: number) => {
    nav_list.value.forEach(item => {
        item.active = false;
        if (item.id === index) item.active = true;
    });
};
onMounted(() => {
    let url = new URL(window.location.href);
    nav_list.value.forEach(item => {
        item.active = false;
        if (item.src.includes(url.pathname)) {
            if (url.pathname !== '/') item.active = true;
            if (item.src === '/') item.active = true;
        }
    });

});
</script>

<template>
    <header>
        <a class="logo" href="#simon">Report<span>Query</span></a> <!--Left Section-->
        <nav> <!--Middle Section-->
            <RouterLink v-for="item in nav_list" :key="item.id" :to="{ path: item.src, query: { id: item.id } }"
                :class="{ 'nav-item': true, 'active': item.active }" @click="onSwitch(item.id)">{{
                    item.text }}</RouterLink>
        </nav>

        <button class="cta-btn" @click="open">Click</button> <!--Right Section-->
    </header>
</template>

<style lang="scss" scoped>
/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    margin: 10px;

    animation: topIn 1.2s ease-out forwards;
    opacity: 0;
    animation-delay: 0.2s;

    .logo {
        font-size: 24px;
        font-weight: bold;
        color: white;

        span {
            color: $text-green-color;
        }
    }

    nav {
        display: flex;
        align-items: center;
        gap: 30px;

        a {
            color: white;
            font-size: 18px;
            font-weight: 500;
            position: relative;
            display: flex;
            justify-content: center;
        }

        a::after {
            content: '';
            position: absolute;
            bottom: -10px;
            height: 2px;
            width: 80%;
            box-shadow: 0 0 5px white;
            transform: scaleX(0) translateY(-100%);
            background-color: white;
            transition: 0.3s;
        }

        a:hover::after {
            transform: scaleX(0.5) translateY(0);

        }
    }

    button {
        font-size: 18px;
        font-weight: bold;
        padding: 7px 25px;
        background-color: transparent;
        border: 1px solid white;
        border-radius: 20px;
        color: white;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            background-color: $text-green-color;
            color: rgba(0, 0, 0, 0.6);
            border-color: $text-green-color;
        }
    }
}

.active {
    color: $text-green-color;
}

.active::after {
    background-color: $text-green-color;
}
</style>
