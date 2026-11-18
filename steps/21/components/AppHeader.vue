<script setup>
import { useTheme } from 'vuetify'
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
const theme = useTheme()
</script>

<template>
  <v-app-bar title="Merkliste" color="primary">
    <v-btn to="/" exact>Offen</v-btn>
    <v-btn to="/erledigt">Erledigt</v-btn>
    <v-chip class="mx-4">{{ store.open }} offen</v-chip>
    <v-btn
      icon="mdi-theme-light-dark"
      @click="theme.toggle()"
    />
  </v-app-bar>
</template>
