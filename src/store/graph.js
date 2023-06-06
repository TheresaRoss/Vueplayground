import { createStore } from 'vuex'

import pathify from 'vuex-pathify'

import graph from './module/graph'
import compare from './module/compare'
import chess from './module/chess'

const store = createStore({
  modules: {
    bar: graph,
    radar: compare,
    chess: chess
  },
  plugins: [pathify.plugin] // activate plugin
})

export default store
