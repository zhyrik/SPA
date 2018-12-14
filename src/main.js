// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VImg,
  VTooltip,
  VForm,
  VTextField,
  VCarousel,
  VCheckbox,
  VSubheader,
  VSwitch,
  VTextarea,
  VSnackbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VImg,
    VTooltip,
    VForm,
    VTextField,
    VCarousel,
    VCheckbox,
    VSubheader,
    VSwitch,
    VTextarea,
    VSnackbar,
    transitions
  },
  theme: {
    primary: '#CDDC39',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBrVqWb-kAaeyXD2BM-wUBUnVooxbRRE-U',
      authDomain: 'my-vue-project-b16ed.firebaseapp.com',
      databaseURL: 'https://my-vue-project-b16ed.firebaseio.com',
      projectId: 'my-vue-project-b16ed',
      storageBucket: 'my-vue-project-b16ed.appspot.com',
      messagingSenderId: '308678990078'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
      }
    })
  }
})
