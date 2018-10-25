<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>

        <v-list
          subheader
          two-line
        >
          <h1 class="text--secondary mb-3">Orders</h1>

          <v-list-tile @click="" v-for="list in lists" :key="list.id">
            <v-list-tile-action
              >
              <v-checkbox
                @change="markDone(list)"
                :input-value="list.done"
                color="success"
              ></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{list.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{list.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn class="primary" :to="'/add' + list.addId">Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          id: '1dks',
          name: 'Oleh',
          phone: 2834789472587,
          addId: '123',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>