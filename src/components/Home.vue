<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(item) in promoBooks"
              :key="item.id"
              :src="item.image"
            >
              <div class="button">
                <v-btn class="error" :to="'/add' + item.id">{{item.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg4
          v-for="book in books"
          :key="book.id"
        >
          <v-card>
            <v-img
              :src="book.image"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{book.title}}</h3>
                <div>{{book.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat >Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    books () {
      return this.$store.getters.books
    },
    promoBooks () {
      return this.$store.getters.promoBooks
    }
  }
}
</script>

<style scoped>
  .button{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0,0.5);
    transform: translate(-50%, 0);
    padding: 10px 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;

  }
</style>
