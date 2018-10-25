<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new add</h1>

        <v-form v-model="valid" lazy-validation ref="form">
          <v-text-field
            name="title"
            label="Title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
          ></v-text-field>
          <v-text-field
            id="description"
            name="description"
            label="Description"
            type="text"
            :rules="[v => !!v || 'Description is required']"
            multi-line
            v-model="description"
          ></v-text-field>
        </v-form>

        <v-layout row>
          <v-flex xs12>
            <v-btn class="primary">Upload<v-icon right dark>cloud_upload</v-icon></v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="https://www.drawingnow.com/file/videos/steps/119657/how-to-draw-an-open-book-step-7.jpg" height="200">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              label="Add to promo?"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      promo: ''
    }
  }
}
</script>