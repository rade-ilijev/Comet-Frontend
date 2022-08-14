import { createSSRApp, defineComponent, h } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import { setPageContext } from './usePageContext'
import type { PageContext } from './types'
import '../assets/css/default.scss';
import { createPinia } from 'pinia'

export { createApp }
console.log('wtf');

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

  app.use(createPinia())
  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}
