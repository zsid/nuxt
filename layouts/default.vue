<template>
  <v-app>
    <Navigation v-bind:isMobile="isMobile()" />
    <v-content class="fill-height">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "~/components/Navigation";

export default {
  components: {
    Navigation
  },
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    }
  }
};
</script>
