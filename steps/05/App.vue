<script setup>
import { ref, computed } from 'vue'
import TodoItem from './components/TodoItem.vue'

const todos = ref([])
const text = ref('')
const open = computed(
  () => todos.value.filter(t => !t.done).length,
)

function add() {
  todos.value.push({
    id: crypto.randomUUID(),
    text: text.value.trim(),
    done: false,
  })
  text.value = ''
}

function remove(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<template>
  <h1>Merkliste</h1>
  <form @submit.prevent="add">
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
      @remove="remove(todo.id)"
    />
  </ul>
</template>
