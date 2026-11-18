import { ref, watch } from 'vue'

const KEY = 'merkliste'

export function useTodos() {
  const saved = localStorage.getItem(KEY)
  const todos = ref(saved ? JSON.parse(saved) : [])

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

  return { todos, add, remove }
}
