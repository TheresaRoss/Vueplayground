import { make } from 'vuex-pathify'

const state = {
  test: 5,
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  data1: [40, 20, 12, 39, 10, 40, 39],
  data2: [11, 22, 33, 44, 55]
}

const mutations = {
  ...make.mutations(state),
  increment(state) {
    state.test++
  },
  addnewdata(state, payload) {
    state.labels = [...state.labels, payload.label]
    if (payload.dataset == 1) {
      // payload.dataset is string due to v-model

      state.data1 = [...state.data1, payload.value]
    } else {
      state.data2 = [...state.data2, payload.value]
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
