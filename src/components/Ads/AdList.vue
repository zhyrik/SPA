<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Books</h1>

        <v-card class="elevation-10 mb-3"
          v-for="item in myBooks"
          :key="item.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-card-media
                height="200px"
                :src="item.image"
              ></v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2>{{item.title}}</h2>
                <p>{{item.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad' + item.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myBooks () {
      return this.$store.getters.myBooks
    }
  }
}
</script>