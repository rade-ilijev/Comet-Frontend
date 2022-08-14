import { createSSRApp, defineComponent, h } from "vue";
import { createRouter } from './router'
import MainLayout from "../../layouts/MainLayout.vue";
import { PageContext } from "../../renderer/types";

export { createApp }

function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = defineComponent({
    render() {
      return h(
        MainLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  })

  const app = createSSRApp(PageWithLayout)

  const router = createRouter()
  app.use(router)
  return { app, router }
}




