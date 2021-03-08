import Vuetify from 'vuetify'
import MainFooter from '@/components/MainFooter'
import { createLocalVue, mount } from '@vue/test-utils'

describe('MainFooter', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('Footer should render', () => {
    const wrapper = mount(MainFooter, { localVue, vuetify })
    expect(wrapper.find('[data-testid="main-footer"]').isVisible()).toBe(true)
  })

  test('When rendered should show the passed year and label', async () => {
    const wrapper = mount(MainFooter, { localVue, vuetify })
    wrapper.setProps({ label: 'Testing footer', year: '2021' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="main-footer"]').html()).toContain(
      '2021 — <strong>Testing footer</strong>'
    )
  })
})
