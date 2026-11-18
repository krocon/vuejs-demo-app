<script setup>
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({ nr: String })
const labs = import.meta.glob('./Falle*.vue')
const names = Object.keys(labs).sort()
const lab = computed(() => {
  const load = labs[`./Falle${props.nr}.vue`]
  return load && defineAsyncComponent(load)
})
</script>

<template>
  <v-btn
    v-for="(name, i) in names"
    :key="name"
    :to="`/labor/${i + 1}`"
    class="mr-2 mb-4"
    variant="tonal"
  >
    Falle {{ i + 1 }}
  </v-btn>
  <component :is="lab" v-if="lab" />
  <p v-else>Such dir eine Falle aus.</p>
</template>
