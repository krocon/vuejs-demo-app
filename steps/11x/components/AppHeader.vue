<script setup>
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
</script>

<template>
  <header>
    <strong>Merkliste</strong>
    <span class="badge">{{ store.open }} offen</span>
  </header>
</template>
