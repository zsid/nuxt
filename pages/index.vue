<template>
  <div>
    <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- <v-container>
      <v-row>
        <v-col v-for="image in images" v-bind:key="image.src">
          <v-card class="mx-auto" width="300">
            <v-img class="white--text align-end" height="200px" v-bind:src="image.src">
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text>Share</v-btn>

              <v-btn color="orange" text>Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>-->
    <v-container>
      <FeaturedProducts />
    </v-container>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import FeaturedProducts from "~/components/FeaturedProducts.vue";
export default {
  components: {
    Logo,
    VuetifyLogo,
    FeaturedProducts
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      images: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        }
      ]
    };
  }
};
</script>
