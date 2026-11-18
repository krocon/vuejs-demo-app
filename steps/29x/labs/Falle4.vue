<script setup>
import { ref, shallowRef } from 'vue'
import { makeRows } from './rows'

const rows = shallowRef(makeRows(100000))
const ms = ref(null)

function sortRows() {
  const start = performance.now()
  rows.value = [...rows.value].sort(
    (a, b) => a.prio - b.prio || a.id - b.id,
  )
  ms.value = Math.round(performance.now() - start)
}
</script>

<template>
  <button @click="sortRows">100 000 sortieren</button>
  <p v-if="ms !== null">Sortiert in {{ ms }} ms</p>
  <p>Erste Zeile: {{ rows[0].text }}</p>
</template>
