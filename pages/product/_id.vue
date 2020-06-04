<template>
  <v-container>
    <v-row class="flex-sm-column flex-md-row">
      <v-col>
        <v-img contain max-height="450" :src="`/products/${product.img}`"></v-img>
      </v-col>
      <v-col class="d-flex flex-column">
        <h1 class="text-center display-2 mb-2">{{product.name}}</h1>
        <h5 class="text-center mb-3">{{product.type}}, {{product.size.value}} {{product.size.type}}</h5>
        <h2 class="text-center mb-4">{{product.currency.symbol}}{{product.price}}</h2>
        <div class="align-self-center mb-7">
          <v-btn x-large color="black" class="white--text">Add to basket</v-btn>
        </div>
        <div>
          <h3 class="title">Ingredients</h3>
          <v-row v-for="ing in product.ingredients.featured" :key="ing.title">
            <v-col class="flex-grow-0 justify-center pt-5">
              <v-img contain max-height="80" :src="`/ingredients/${ing.imageUrl}`"></v-img>
            </v-col>
            <v-col>
              <h4>{{ing.title}}</h4>
              <p>{{ing.description}}</p>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="!isMobile">
      <v-tabs grow centered>
        <v-tab v-for="(tab, index) in tabs" :key="index">{{tab.title}}</v-tab>
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <v-card flat tile>
            <v-card-text>{{tab.value}}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-row>
    <v-row justify="center" v-else>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(tab, index) in tabs" :key="index">
          <v-expansion-panel-header class="text-uppercase">{{tab.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>{{tab.value}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProduct(this.id);
    },
    tabs() {
      const tabs = [
        { title: "description", value: this.product.description },
        { title: "how to use", value: this.product.howToUse },
        { title: "ingredients", value: this.product.ingredients.all },
        { title: "delivery and returns", value: "delivery" }
      ];
      return tabs;
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  }
};
</script>
