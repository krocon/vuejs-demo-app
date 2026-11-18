<script setup>
defineProps({ todo: Object })
defineEmits(['toggle', 'remove'])
</script>

<template>
  <li :class="{ done: todo.done }">
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="$emit('toggle')"
      />
      {{ todo.text }}
    </label>
    <button @click="$emit('remove')">✕</button>
  </li>
</template>

<style scoped>
.done label {
  text-decoration: line-through;
  opacity: 0.55;
}
</style>
