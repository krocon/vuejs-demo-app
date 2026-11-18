<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import TodoItem from '../components/TodoItem.vue'
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
const { todos, open } = storeToRefs(store)
const text = ref('')

function submit() {
  store.add(text.value)
  text.value = ''
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="text" placeholder="Was steht an?" />
    <button :disabled="!text.trim()">Hinzufügen</button>
  </form>
  <p v-if="todos.length">
    {{ open }} von {{ todos.length }} offen
  </p>
  <p v-else>Noch nichts zu tun.</p>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="todo.done = !todo.done"
      @remove="store.remove(todo.id)"
    />
  </ul>
</template>
