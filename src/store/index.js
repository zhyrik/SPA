import Vue from 'vue'
import Vuex from 'vuex'

import books from './books'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books,
    user,
    shared
  }
})
