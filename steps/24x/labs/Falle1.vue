<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0, name: 'Zähler' })
const { count, name } = state
</script>

<template>
  <h3>{{ name }}: {{ count }}</h3>
  <button @click="state.count++">Plus eins</button>
  <p>Im Zustand steht: {{ state.count }}</p>
</template>
