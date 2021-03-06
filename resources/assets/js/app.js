require('./bootstrap')

import router from './router'
import store from './store'
import app from './components/App'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

sync(store, router)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(app),
})
