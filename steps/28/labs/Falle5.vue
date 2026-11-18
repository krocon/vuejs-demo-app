<script setup>
import { ref, nextTick } from 'vue'
import LabRow from './LabRow.vue'
import { makeRows } from './rows'

const rows = makeRows(1000)
const activeId = ref(0)
const updates = ref(0)

async function next() {
  window.updates = 0
  activeId.value++
  await nextTick()
  updates.value = window.updates
}
</script>

<template>
  <button @click="next">Nächste Zeile markieren</button>
  <p>Neu gerendert: {{ updates }} von {{ rows.length }}</p>
  <ul>
    <LabRow
      v-for="row in rows"
      :key="row.id"
      :row="row"
      :active="row.id === activeId"
    />
  </ul>
</template>
