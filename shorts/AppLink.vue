<script setup>
// Short „Eine Komponente, viele Fälle“: geprüfte Props
defineProps({
  href: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a :href="href"><slot /></a>
</template>
