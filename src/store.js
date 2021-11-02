import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
      cart: []
    },
    mutations: {
        addCart: (state, product) => state.cart.push(product),
    },
    getters: {
        getCart: (state) => 
        { 
            return state.cart
        }
    }
  })
  export default store;