<template>
  <v-app-bar app light>
    <v-app-bar-nav-icon v-if="isMobile"></v-app-bar-nav-icon>

    <n-link to="/" class="px-3">Logo Here</n-link>
    <v-spacer></v-spacer>
    <nav class="d-flex">
      <n-link to="/" class="px-3">Home</n-link>
      <n-link to="/" class="px-3">Creams</n-link>
      <n-link to="/" class="px-3">About us</n-link>
    </nav>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  props: ["isMobile"]
};
</script>
