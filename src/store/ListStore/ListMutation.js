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
    const length = state.todos.length
    for (let index = 0; index < length; index++) {
      if (state.todos[index].completed === true) {
        state.todos.splice(index, 1)
      }
    }
  }
}
