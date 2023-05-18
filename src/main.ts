import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**
 * Styles
 */
import '@vuepic/vue-datepicker/dist/main.css'
import 'uno.css'
import './style.css'

/**
 * Plugins
 */
import VueDatePicker from '@vuepic/vue-datepicker'

/**
 * init app
 */
createApp(App)
	.use(router)
	.component('VueDatePicker', VueDatePicker)
	.mount('#app')
