<script setup>
import { reactive, toRefs } from 'vue'

const state = reactive({ count: 0, name: 'Zähler' })
const { count, name } = toRefs(state)
</script>

<template>
  <h3>{{ name }}: {{ count }}</h3>
  <button @click="state.count++">Plus eins</button>
  <p>Im Zustand steht: {{ state.count }}</p>
</template>
