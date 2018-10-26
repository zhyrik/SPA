<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-media
            :src="book.image"
            height="300"
          ></v-card-media>
          <v-card-text>
            <h1>{{book.title}}</h1>
            <p>{{book.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" flat>Edit</v-btn>
            <v-btn class="primary">Bay</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    book () {
      const id = this.id
      console.log(id)
      return this.$store.getters.BooksById(id)
    }
  }
}
</script>