<script setup>
import { ref, computed } from 'vue'
import { makeRows } from './rows'

const rows = ref(makeRows(5000))
const search = ref('')
const clicks = ref(0)
let runs = 0

const filtered = computed(() => {
  console.log('Filter läuft:', ++runs)
  return rows.value
    .filter(r => r.text.includes(search.value))
    .sort((a, b) => a.prio - b.prio)
    .slice(0, 5)
})
</script>

<template>
  <input v-model="search" placeholder="Suchen" />
  <button @click="clicks++">Klicks: {{ clicks }}</button>
  <ul>
    <li v-for="row in filtered" :key="row.id">
      {{ row.text }} (Prio {{ row.prio }})
    </li>
  </ul>
  <p>{{ filtered.length }} Treffer gezeigt</p>
</template>
