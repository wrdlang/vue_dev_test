import Vuetify from 'vuetify'
import CategoryListItem from '@/components/categories/CategoryListItem'
import { createLocalVue, mount } from '@vue/test-utils'

describe('CategoryListItem', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('CategoryListItem should render', () => {
    const wrapper = mount(CategoryListItem, { localVue, vuetify })
    expect(wrapper.find('[data-testid="list-item"]').isVisible()).toBe(true)
  })

  test('When rendered should show the passed category name', async () => {
    const wrapper = mount(CategoryListItem, { localVue, vuetify })
    wrapper.setProps({ name: 'testing name' })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="list-item-title"]').text()).toContain(
      'testing name'
    )
  })
})
