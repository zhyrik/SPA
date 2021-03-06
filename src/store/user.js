import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}
export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.id))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
      // fb.auth().createUserWithEmailAndPassword(email, password)
      //   .then(user => {
      //     commit('setUser', new User(user.id))
      //     commit('setLoading', false)
      //   })
      //   .catch(error => {
      //     commit('setLoading', false)
      //     commit('setError', error.message)
      //   })
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.id))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    autoLogin ({commit}, payload) {
      commit('setUser', new User(payload.uid))
    },
    exit ({commit}) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLogin (state) {
      return state.user !== null
    }
  }
}
