import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  beforeEach(() => localStorage.clear())

  it('hinzufügen, abhaken, löschen – der Zähler folgt', async () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Noch nichts zu tun.')
    expect(wrapper.find('form button').attributes('disabled')).toBeDefined()

    for (const entry of ['Vue lernen', 'Video schneiden']) {
      await wrapper.find('form input').setValue(entry)
      await wrapper.find('form').trigger('submit')
    }
    expect(wrapper.text()).toContain('2 von 2 offen')

    await wrapper.find('li input').trigger('change')
    expect(wrapper.text()).toContain('1 von 2 offen')

    await wrapper.find('li button').trigger('click')
    expect(wrapper.text()).toContain('1 von 1 offen')
    expect(wrapper.text()).not.toContain('Vue lernen')
  })
})
