import { createRouter, createWebHistory } from "vue-router";
import { ElMessage } from "element-plus";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView/index.vue"),
    },
    {
      path: "/student",
      name: "student",
      component: () => import("../views/StudentView/index.vue"),
    },
    {
      path: "/class",
      name: "class",
      component: () => import("../views/ClassView/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView/index.vue"),
    },
  ],
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否为存在的路径 不是则回到主页路由
  let check = router.getRoutes().filter((item) => {
    return item.path == to.path;
  }).length;
  if (!check) {
    next("/");
  } else {
    next();
  }
});

export default router;
