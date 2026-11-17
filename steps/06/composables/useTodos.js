import { ref, watch } from 'vue'

const KEY = 'merkliste'

export function useTodos() {
  const todos = ref(JSON.parse(localStorage.getItem(KEY) ?? '[]'))

  watch(todos, value => localStorage.setItem(KEY, JSON.stringify(value)), { deep: true })

  function add(text) {
    todos.value.push({ id: crypto.randomUUID(), text: text.trim(), done: false })
  }

  function remove(id) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  return { todos, add, remove }
}
