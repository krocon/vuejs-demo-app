<script setup>
import { ref } from 'vue'

const rows = ref([
  { id: 'a', text: 'Vue lernen' },
  { id: 'b', text: 'Video schneiden' },
  { id: 'c', text: 'Kaffee kochen' },
])

function remove(id) {
  rows.value = rows.value.filter(r => r.id !== id)
}
</script>

<template>
  <ul>
    <li v-for="(row, index) in rows" :key="index">
      {{ row.text }}
      <input placeholder="Notiz" />
      <button @click="remove(row.id)">✕</button>
    </li>
  </ul>
</template>
