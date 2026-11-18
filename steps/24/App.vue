<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container max-width="720">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
