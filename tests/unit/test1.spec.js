import { shallowMount } from '@vue/test-utils'
import UserItem from '@/components/Useritem'
describe('UserItem', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(UserItem)
    expect(wrapper.html()).toMatchSnapshot()
  })
})