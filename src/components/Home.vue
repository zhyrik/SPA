<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(item) in books"
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
  data () {
    return {
      books: [
        {
          title: 'book1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laudantium inventore, cupiditate nisi suscipit commodi voluptatem explicabo aliquam. Cumque aperiam alias tempore porro? Quasi accusamus tempora explicabo. Excepturi, laboriosam quisquam!',
          promo: true,
          image: 'https://www.drawingnow.com/file/videos/steps/119657/how-to-draw-an-open-book-step-7.jpg',
          id: 120
        },
        {
          title: 'book2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laudantium inventore, cupiditate nisi suscipit commodi voluptatem explicabo aliquam. Cumque aperiam alias tempore porro? Quasi accusamus tempora explicabo. Excepturi, laboriosam quisquam!',
          promo: true,
          image: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2015%2F06%2F521811839-copy.jpg&w=1000&q=70',
          id: 121
        },
        {
          title: 'book3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laudantium inventore, cupiditate nisi suscipit commodi voluptatem explicabo aliquam. Cumque aperiam alias tempore porro? Quasi accusamus tempora explicabo. Excepturi, laboriosam quisquam!',
          promo: true,
          image: 'data:image/jpeg;base64,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',
          id: 122
        },
        {
          title: 'book4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laudantium inventore, cupiditate nisi suscipit commodi voluptatem explicabo aliquam. Cumque aperiam alias tempore porro? Quasi accusamus tempora explicabo. Excepturi, laboriosam quisquam!',
          promo: true,
          image: 'https://img.huffingtonpost.com/asset/5a3126821500004e0049b6c9.jpeg?ops=scalefit_720_noupscale',
          id: 123
        }
      ]
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
