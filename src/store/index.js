import Vue from 'vue'
import Vuex from 'vuex'

import books from './books'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books,
    user
  }
})
