import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'

export { createRouter }

function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/gpanel/index',
        component: () => import('./Home.vue'),
      },
      {
        path: '/gpanel/about',
        component: () => import('./About.vue'),
      },
    ],
  })
}
