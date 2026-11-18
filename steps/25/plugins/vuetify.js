import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { de } from 'vuetify/locale'

export const vuetify = createVuetify({
  locale: { locale: 'de', messages: { de } },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { colors: { primary: '#42b883' } },
      dark: { colors: { primary: '#42d392' } },
    },
  },
  defaults: {
    VBtn: { rounded: 'lg' },
    VTextField: { variant: 'outlined' },
  },
})
