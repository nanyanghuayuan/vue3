import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  vant全局样式
import Vant from 'vant'
import 'vant/lib/index.css'
//  全局样式
import './styles/index.less'
//  动态rem
import 'amfe-flexible'

createApp(App).use(store).use(router).use(Vant).mount('#app')
