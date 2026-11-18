<script setup>
import { ref } from 'vue'
import { makeRows } from './rows'

const frame = () => new Promise(requestAnimationFrame)

const rows = makeRows(20000)
const show = ref(false)
const ms = ref(null)
const nodes = ref(0)

async function toggle() {
  const start = performance.now()
  show.value = !show.value
  await frame()
  await frame()
  ms.value = Math.round(performance.now() - start)
  nodes.value = document.querySelectorAll('.lab *').length
}
</script>

<template>
  <button @click="toggle">20 000 Zeilen zeigen</button>
  <p v-if="ms !== null">
    {{ ms }} ms, {{ nodes }} Elemente im DOM
  </p>
  <div v-if="show" class="lab">
    <div v-for="row in rows" :key="row.id" class="row">
      {{ row.text }} (Prio {{ row.prio }})
    </div>
  </div>
</template>

<style scoped>
.lab {
  height: 300px;
  overflow: auto;
}
.row {
  height: 32px;
}
</style>
