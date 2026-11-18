<script setup>
import { onUpdated } from 'vue'

defineProps({ row: Object, active: Boolean })
onUpdated(() => window.updates++)
</script>

<template>
  <li :class="{ active }">
    {{ row.text }}
  </li>
</template>

<style scoped>
.active {
  font-weight: bold;
  color: #42b883;
}
</style>
