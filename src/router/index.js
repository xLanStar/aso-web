import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:id?",
      name: "home",
      component: HomeView,
    },
    {
      path: "/edit/:id?",
      name: "edit",
      component: () => import("../views/EditView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      redirect: "/",
    },
  ],
});

export default router;
