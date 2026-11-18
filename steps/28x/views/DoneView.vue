<script setup>
import { storeToRefs } from 'pinia'
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
const { done } = storeToRefs(store)
</script>

<template>
  <v-alert
    v-if="!done.length"
    type="info"
    variant="tonal"
    text="Noch nichts erledigt."
  />
  <v-card v-else>
    <v-list>
      <v-list-item
        v-for="todo in done"
        :key="todo.id"
        :title="todo.text"
        prepend-icon="mdi-check"
      />
    </v-list>
    <template #actions>
      <v-btn
        prepend-icon="mdi-broom"
        @click="store.clearDone()"
      >
        Aufräumen
      </v-btn>
    </template>
  </v-card>
</template>
