import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AppButton from './AppButton.vue'
import AppLink from './AppLink.vue'

describe('Shorts', () => {
  it('AppButton: Slots füllen die Lücken', () => {
    const plain = mount(AppButton, { slots: { default: 'Speichern' } })
    expect(plain.text()).toBe('Speichern')
    const icon = mount(AppButton, {
      slots: { default: 'Neu', icon: '<i>+</i>' },
    })
    expect(icon.html()).toContain('<i>+</i>')
    expect(icon.text()).toContain('Neu')
  })

  it('AppLink: eine Zahl als href löst die Warnung aus', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const link = mount(AppLink, {
      props: { href: 42 },
      slots: { default: 'Doku' },
    })
    expect(link.attributes('href')).toBe('42')
    const text = warn.mock.calls.map(c => c.join(' ')).join('\n')
    expect(text).toContain('Invalid prop: type check failed')
    expect(text).toContain('Expected String')
    warn.mockRestore()
  })
})
