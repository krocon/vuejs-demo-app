<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTodosStore } from '../stores/todos'

const props = defineProps({ id: String })
const store = useTodosStore()
const router = useRouter()
const todo = computed(
  () => store.todos.find(t => t.id === props.id),
)

function remove() {
  store.remove(props.id)
  router.push('/')
}
</script>

<template>
  <form v-if="todo" @submit.prevent="router.push('/')">
    <input v-model="todo.text" />
    <button>Fertig</button>
  </form>
  <p v-if="todo">
    <label>
      <input type="checkbox" v-model="todo.done" />
      erledigt
    </label>
  </p>
  <button v-if="todo" @click="remove">Löschen</button>
  <p v-else>Diesen Eintrag gibt es nicht.</p>
</template>
