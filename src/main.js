import Vue from 'vue'
import App from './App.vue'
import { JsPlumbComponentsMindmapVue2Plugin } from '@jsplumb-components/mindmap-vue2'

Vue.config.productionTip = false

Vue.use(JsPlumbComponentsMindmapVue2Plugin)

new Vue({ render: h => h(App) }).$mount('#app')

