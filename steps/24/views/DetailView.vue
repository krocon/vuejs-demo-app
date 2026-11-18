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
  <v-card v-if="todo" title="Eintrag bearbeiten">
    <v-card-text>
      <v-form @submit.prevent="router.push('/')">
        <v-text-field v-model="todo.text" label="Eintrag" />
        <v-checkbox v-model="todo.done" label="erledigt" />
      </v-form>
    </v-card-text>
    <template #actions>
      <v-btn color="error" @click="remove">Löschen</v-btn>
      <v-spacer />
      <v-btn color="primary" to="/">Fertig</v-btn>
    </template>
  </v-card>
  <v-alert
    v-else
    type="warning"
    text="Diesen Eintrag gibt es nicht."
  />
</template>
