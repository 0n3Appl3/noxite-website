import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import scrollReveal from './directives/scrollReveal'
import scrollRevealGroup from './directives/scrollRevealGroup'

const app = createApp(App)

app.use(router)
app.directive('scroll-reveal', scrollReveal)         // single standalone elements
app.directive('scroll-reveal-group', scrollRevealGroup) // grids/lists — guarantees order

app.mount('#app')