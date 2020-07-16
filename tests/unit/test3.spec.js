// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import UserSearch from '@/components/UserSearch'

// const localVue = createLocalVue()

// localVue.use(Vuex)

// describe('UserSearch.vue', () => {
//   let actions
//   let store

//   beforeEach(() => {
//     actions = {
//       actionInput: jest.fn()
//     }
//     store = new Vuex.Store({
//       actions
//     })
//   })

//   it('вызывает "actionInput", когда значение события — "input"', () => {
//     const wrapper = shallowMount(UserSearch, { store, localVue })
//     const input = wrapper.find('input')
//     input.element.value = 'input'
//     input.trigger('input')
//     expect(actions.actionInput).toHaveBeenCalled()
//   })

//   it('не вызывает "actionInput", когда значение события не "input"', () => {
//     const wrapper = shallowMount(UserSearch, { store, localVue })
//     const input = wrapper.find('input')
//     input.element.value = 'not input'
//     input.trigger('input')
//     expect(actions.actionInput).not.toHaveBeenCalled()
//   })

// //   it('вызывает действие хранилища "actionClick" по нажатию кнопки', () => {
// //     const wrapper = shallowMount(Actions, { store, localVue })
// //     wrapper.find('button').trigger('click')
// //     expect(actions.actionClick).toHaveBeenCalled()
// //   })
// })