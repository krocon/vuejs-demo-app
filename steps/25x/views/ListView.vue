<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodosStore } from '../stores/todos'

const store = useTodosStore()
const { todos, open } = storeToRefs(store)
const text = ref('')
const search = ref('')
const headers = [
  { title: 'Erledigt', key: 'done', width: 110 },
  { title: 'Eintrag', key: 'text' },
  {
    title: '',
    key: 'actions',
    sortable: false,
    align: 'end',
  },
]

const pending = ref(null)
const deleted = ref(false)

function submit() {
  store.add(text.value)
  text.value = ''
}

function confirmRemove() {
  store.remove(pending.value.id)
  pending.value = null
  deleted.value = true
}
</script>

<template>
  <v-form class="d-flex ga-3" @submit.prevent="submit">
    <v-text-field
      v-model="text"
      label="Was steht an?"
      prepend-inner-icon="mdi-pencil"
      clearable
      hide-details
    />
    <v-btn
      type="submit"
      color="primary"
      size="x-large"
      prepend-icon="mdi-plus"
      :disabled="!text?.trim()"
    >
      Hinzufügen
    </v-btn>
  </v-form>
  <v-card class="mt-6">
    <v-card-title class="d-flex align-center">
      {{ open }} von {{ todos.length }} offen
      <v-spacer />
      <v-text-field
        v-model="search"
        label="Suchen"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        max-width="240"
        hide-details
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="todos"
      :search="search"
      :items-per-page="5"
      no-data-text="Noch nichts zu tun."
    >
      <template #item.done="{ item }">
        <v-checkbox-btn v-model="item.done" />
      </template>
      <template #item.text="{ item }">
        <RouterLink
          :to="{ name: 'detail', params: { id: item.id } }"
        >
          {{ item.text }}
        </RouterLink>
      </template>
      <template #item.actions="{ item }">
        <v-btn
          icon="mdi-delete"
          variant="text"
          @click="pending = item"
        />
      </template>
    </v-data-table>
  </v-card>
  <v-dialog
    :model-value="!!pending"
    max-width="420"
    @update:model-value="pending = null"
  >
    <v-card title="Eintrag löschen?" :text="pending?.text">
      <template #actions>
        <v-btn @click="pending = null">Abbrechen</v-btn>
        <v-btn color="error" @click="confirmRemove">
          Löschen
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
  <v-snackbar v-model="deleted" :timeout="2500">
    Eintrag gelöscht.
  </v-snackbar>
</template>
