import { createStore } from 'vuex'

import workspaceFunction from './modules/workspace'
import spaceFunction from './modules/space'
import threadFunction from './modules/thread'
import commentFunction from './modules/comment'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    workspaceFunction,
    spaceFunction,
    threadFunction,
    commentFunction
  }
})
