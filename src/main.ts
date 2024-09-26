import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the library
import { plugin as HoppUI } from '@hoppscotch/ui'

// Import theme styles for default styling (optional)
import '@hoppscotch/ui/themes.css'

// Import the styles
import '@hoppscotch/ui/style.css'

const app = createApp(App)
// Register the library as a plugin
app.use(HoppUI)

app.use(router)

app.mount('#app')
