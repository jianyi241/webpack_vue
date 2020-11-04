// 引入babel-polyfill
import 'babel-polyfill'

// 引入 Vue 框架
import Vue from 'vue'

//引入 App.vue 组件
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})