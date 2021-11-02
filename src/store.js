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
        deleteCart: (state,product) => {
            for(let index = 0; index < state.cart.length; index++) 
            if(state.cart[index].id==product) 
            {state.cart.splice(index,1);
            return 1;} 
        }
        
    },
    getters: {
        getCart: (state) => 
        { 
            return state.cart
        }
    }
  })
  export default store;