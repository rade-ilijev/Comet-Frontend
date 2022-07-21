import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { createPinia } from "pinia";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const app = createSSRApp({
    render: () => h(Page, pageProps),
  });
  app.use(createPinia());
  const appHtml = await renderToString(app);

  const title = "Vite SSR";

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
