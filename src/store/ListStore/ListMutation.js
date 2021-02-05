import * as types from '../mutationType.js'

export default {
  [types.GET_LIST] (state, data) {
    if (localStorage.getItem('todo-list')) {
      state.todos = JSON.parse(localStorage.getItem('todo-list'))
    }
  },
  [types.ADD_LIST] (state, data) {
    state.todos.push(data)
  },
  [types.TOGGLE_ITEM] (state, data) {
    const { status, index } = data
    state.todos[index].completed = status
  },
  [types.DELETE_ITEM] (state, data) {
    state.todos.splice(data, 1)
  },
  [types.TOGGLE_FILTER] (state, data) {
    state.filterState = data
  },
  [types.FINISH_ALL] (state, data) {
    for (const item of state.todos) {
      if (item.completed === false) {
        item.completed = true
      }
    }
  },
  [types.DELETE_ALL] (state, data) {
    state.todos = state.todos.filter((item, index) => {
      return !item.completed
    })
  }
}
