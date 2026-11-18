<script setup>
import { storeToRefs } from 'pinia'
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
const { done } = storeToRefs(store)
</script>

<template>
  <p v-if="!done.length">Noch nichts erledigt.</p>
  <ul>
    <li v-for="todo in done" :key="todo.id" class="done">
      {{ todo.text }}
    </li>
  </ul>
  <button v-if="done.length" @click="store.clearDone()">
    Aufräumen
  </button>
</template>
