import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '../components/TodoItem.vue'

describe('TodoItem', () => {
  it('zeigt den Text und meldet toggle/remove nach oben', async () => {
    const wrapper = mount(TodoItem, { props: { todo: { id: '1', text: 'Milch', done: false } } })
    expect(wrapper.text()).toContain('Milch')
    await wrapper.find('input').trigger('change')
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('toggle')
    expect(wrapper.emitted()).toHaveProperty('remove')
  })

  it('markiert erledigte Einträge', () => {
    const wrapper = mount(TodoItem, { props: { todo: { id: '1', text: 'Milch', done: true } } })
    expect(wrapper.classes()).toContain('done')
  })
})
