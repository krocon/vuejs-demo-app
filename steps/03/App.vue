<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <h1>Merkliste</h1>
  <button @click="increment">Geklickt: {{ count }}</button>
</template>
