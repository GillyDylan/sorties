// let's install Vue globally, so we can access wherever* we want
window.Vue = require('vue')

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './components/App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
    routes: routes,
    mode: 'hash'
})

new Vue({
    el: '#sorties',
    router,
    store,
    render: h => h(App)
})