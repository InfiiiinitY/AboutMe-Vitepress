import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CustomLayout from './Layout.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

export default {
  extends: DefaultTheme,
  
  Layout: CustomLayout,

  enhanceApp({ app }) {
    app.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
              darkModeSelector: '.dark',
            }
        }
    });
  }
} satisfies Theme