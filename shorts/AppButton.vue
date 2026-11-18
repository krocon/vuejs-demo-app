<script setup>
// Short „Eine Komponente, viele Fälle“: Slots
</script>

<template>
  <button class="btn">
    <slot name="icon" />
    <slot />
  </button>
</template>
