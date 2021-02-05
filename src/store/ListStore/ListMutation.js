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
  [types.COUNT_LIST] (state, data) {
    let count = 0
    for (const item of state.todos) {
      if (item.completed === false) count++
    }
    state.itemCount = count
  },
  [types.TOGGLE_ITEM] (state, data) {
    const { status, index } = data
    state.todos[index].completed = status
  },
  [types.DELETE_ITEM] (state, data) {
    state.todos.splice(data, 1)
  }
}
