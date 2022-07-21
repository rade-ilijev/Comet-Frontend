import { createRouter, createWebHistory } from "vue-router";

const loadComponent = (view: string) => {
  return () => import(`../views/${view}.vue`);
};

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: loadComponent("HomeView"),
    },
  ],
});

export default router;
