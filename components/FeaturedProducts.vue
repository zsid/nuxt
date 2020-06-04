<template>
  <v-row>
    <v-col v-for="product in featuredProducts" :key="product.id">
      <v-card class="mx-auto d-flex flex-column" width="300" height="400">
        <v-img
          class="white--text align-end"
          contain
          max-height="200"
          :src="`/products/${product.img}`"
        ></v-img>

        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle class="pb-0">£{{ product.price }}</v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>
          <nuxt-link :to="`/product/${product.id}`">
            <v-btn color="orange" text>View</v-btn>
          </nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    }
  }
};
</script>
