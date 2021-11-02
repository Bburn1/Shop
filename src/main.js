import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './components/App.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
import store from './store.js'
Vue.use(VueRouter)
const routes = [
    { path: '/', component: ProductsList },
    { path: '/product/:id', component: ProductInfo, props : true },
    { path: '/Cart', component: Cart}
]

const router = new VueRouter({
    routes
})



Vue.use(Vuex)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
})
