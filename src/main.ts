import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/locales'

import pt from '@/locales/pt.json'
import en from '@/locales/en.json'
import { Language } from './types/Types'

import App from './App.vue'
import router from './router'

import '@/assets/global.css'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

i18n.global.setLocaleMessage(Language.Portuguese, pt)
i18n.global.setLocaleMessage(Language.English, en)

app.mount('#app')
