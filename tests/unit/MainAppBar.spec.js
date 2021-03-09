import Vuetify from 'vuetify'
import MainAppBar from '@/components/MainAppBar'
import { createLocalVue, mount } from '@vue/test-utils'

describe('MainAppBar', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('App bar should render', () => {
    const wrapper = mount(MainAppBar, { localVue, vuetify })
    expect(wrapper.find('[data-testid="appbar-title"]').isVisible()).toBe(true)
  })

  test('When rendered should show the passed title', async () => {
    const wrapper = mount(MainAppBar, { localVue, vuetify })
    wrapper.setProps({ title: 'Testing app bar' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="appbar-title"]').text()).toBe(
      'Testing app bar'
    )
  })
})
