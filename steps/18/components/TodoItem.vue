<script setup>
defineProps({ todo: Object })
defineEmits(['toggle', 'remove'])
</script>

<template>
  <li :class="{ done: todo.done }">
    <input
      type="checkbox"
      :checked="todo.done"
      @change="$emit('toggle')"
    />
    <RouterLink
      :to="{ name: 'detail', params: { id: todo.id } }"
    >
      {{ todo.text }}
    </RouterLink>
    <button @click="$emit('remove')">✕</button>
  </li>
</template>

<style scoped>
.done a {
  text-decoration: line-through;
  opacity: 0.55;
}
</style>
