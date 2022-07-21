import { createSSRApp, h } from "vue";
import { createPinia } from "pinia";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const app = createSSRApp({
    render: () => h(Page, pageProps),
  });
  app.use(createPinia());
  app.mount("#app");
}
