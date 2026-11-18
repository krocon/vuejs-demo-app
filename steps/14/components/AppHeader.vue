<script setup>
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
</script>

<template>
  <header>
    <strong>Merkliste</strong>
    <nav>
      <RouterLink to="/">Offen</RouterLink>
      <RouterLink to="/erledigt">Erledigt</RouterLink>
    </nav>
    <span class="badge">{{ store.open }} offen</span>
  </header>
</template>
