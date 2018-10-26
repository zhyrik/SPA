<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Ads</h1>

        <v-card class="elevation-10 mb-3"
          v-for="item in ads"
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
  data () {
    return {
      ads: [
        {
          title: 'book1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laudantium inventore, cupiditate nisi suscipit commodi voluptatem explicabo aliquam. Cumque aperiam alias tempore porro? Quasi accusamus tempora explicabo. Excepturi, laboriosam quisquam!',
          promo: true,
          image: 'https://www.drawingnow.com/file/videos/steps/119657/how-to-draw-an-open-book-step-7.jpg',
          id: 120
        }
      ]
    }
  }
}
</script>