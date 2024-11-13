import "./assets/styles/main.scss";

//整体导入 ElementPlus 组件库
import ElementPlus from "element-plus"; //导入 ElementPlus 组件库的所有模块和功能
import "element-plus/dist/index.css"; //导入 ElementPlus 组件库所需的全局 css 样式
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

app.mount("#app");
