import { make } from 'vuex-pathify'

const state = {
  test: 0,
  data1: [65, 59, 90, 81, 56, 55, 40],
  data2: [28, 48, 40, 19, 0, 0, 0],
  label: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running']
}

const mutations = {
  ...make.mutations(state),
  incrementbyone(state, payload) {
    const dataset = payload.dataset == 1 ? state.data1 : state.data2
    const index = state.label.findIndex((label) => label === payload.label)

    if (index !== -1 && dataset[index] !== 99) {
      dataset[index] = dataset[index] + 1
    }
  },
  incrementbyten(state, payload) {
    const dataset = payload.dataset == 1 ? state.data1 : state.data2
    const index = state.label.findIndex((label) => label === payload.label)

    if (dataset[index] == 99) {
      return
    }
    dataset[index] = dataset[index] + 10
    if (dataset[index] > 99) {
      dataset[index] = 99
    }
  },
  decrementbyone(state, payload) {
    const dataset = payload.dataset == 1 ? state.data1 : state.data2
    const index = state.label.findIndex((label) => label === payload.label)

    if (index !== -1 && dataset[index] !== 0) {
      dataset[index] = dataset[index] - 1
    }
  },
  decrementbyten(state, payload) {
    const dataset = payload.dataset == 1 ? state.data1 : state.data2
    const index = state.label.findIndex((label) => label === payload.label)
    if (dataset[index] == 0) {
      return
    }
    dataset[index] = dataset[index] - 10
    if (dataset[index] < 0) {
      dataset[index] = 0
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
