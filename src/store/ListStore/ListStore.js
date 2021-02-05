import actions from './ListAction.js'
import mutations from './ListMutation.js'

const state = {
  todos: [],
  filterState: 'all'
}

export default {
  state,
  actions,
  mutations
}
