import { createRouter, createWebHistory } from "vue-router";

const loadComponent = (view: string) => {
  return () => import(`../views/${view}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: loadComponent('HomeView'),
    },
  ],
});

export default router;
