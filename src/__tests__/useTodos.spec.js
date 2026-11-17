import { describe, it, expect, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useTodos } from '../composables/useTodos'

describe('useTodos', () => {
  beforeEach(() => localStorage.clear())

  it('fügt hinzu und entfernt', () => {
    const { todos, add, remove } = useTodos()
    add('  Vue lernen ')
    expect(todos.value).toHaveLength(1)
    expect(todos.value[0]).toMatchObject({ text: 'Vue lernen', done: false })
    remove(todos.value[0].id)
    expect(todos.value).toHaveLength(0)
  })

  it('speichert in localStorage und lädt wieder', async () => {
    const first = useTodos()
    first.add('Bleibt nach Reload')
    first.todos.value[0].done = true
    await nextTick()
    const second = useTodos()
    expect(second.todos.value).toHaveLength(1)
    expect(second.todos.value[0]).toMatchObject({ text: 'Bleibt nach Reload', done: true })
  })
})
