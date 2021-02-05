import actions from './ListAction.js'
import mutations from './ListMutation.js'

const state = {
  todos: [],
  itemCount: 0,
  filterState: 'all'
}

export default {
  state,
  actions,
  mutations
}
