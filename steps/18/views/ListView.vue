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
  <v-form class="d-flex ga-3" @submit.prevent="submit">
    <v-text-field
      v-model="text"
      label="Was steht an?"
      prepend-inner-icon="mdi-pencil"
      clearable
      hide-details
    />
    <v-btn
      type="submit"
      color="primary"
      size="x-large"
      prepend-icon="mdi-plus"
      :disabled="!text?.trim()"
    >
      Hinzufügen
    </v-btn>
  </v-form>
  <v-alert
    v-if="!todos.length"
    class="mt-4"
    type="info"
    variant="tonal"
    text="Noch nichts zu tun."
  />
  <p v-else class="my-4">
    {{ open }} von {{ todos.length }} offen
  </p>
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
