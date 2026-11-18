<script setup>
import { computed } from 'vue'
import { useTodos } from '../composables/useTodos'

const { todos } = useTodos()
const open = computed(
  () => todos.value.filter(t => !t.done).length,
)
</script>

<template>
  <header>
    <strong>Merkliste</strong>
    <span class="badge">{{ open }} offen</span>
  </header>
</template>
