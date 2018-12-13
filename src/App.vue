<template>
  <v-app>
    <v-navigation-drawer temporary app v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          avatar
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon v-if="item.icon" color="lime">{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>



    <v-toolbar app color="lime" dark>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">Title</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in items" :key="item.title" :to="item.url">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>



    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn
          color="lime"
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLogin () {
      return this.$store.getters.isUserLogin
    },
    items () {
      if (this.isUserLogin) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New book', icon: 'note_add', url: '/new'},
          {title: 'My book', icon: 'list', url: '/list'}
        ]
      }
      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  },
  name: 'App'
}
</script>

<style scoped>

</style>
