import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

const KEY = 'merkliste'

export const useTodosStore = defineStore('todos', () => {
  const saved = localStorage.getItem(KEY)
  const todos = ref(saved ? JSON.parse(saved) : [])
  const open = computed(
    () => todos.value.filter(t => !t.done).length,
  )

  function save() {
    localStorage.setItem(KEY, JSON.stringify(todos.value))
  }
  watch(todos, save, { deep: true })

  function add(text) {
    todos.value.push({
      id: crypto.randomUUID(),
      text: text.trim(),
      done: false,
    })
  }

  function remove(id) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  return { todos, open, add, remove }
})
