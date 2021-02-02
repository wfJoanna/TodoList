<template>
  <div id="app">
    <input v-model="inputValue"/>
    <button @click="addTodo">添加任务</button>
    <ul>
      <todo-item v-for="(item,index) in todos" :key="index" :content="item.title" :index="index"
                 :completed="item.completed" @toggle="toggleTodo" @deleteItem="deleteTodo"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'App',
  components: {
    TodoItem
  },
  data () {
    return {
      todos: [],
      inputValue: ''
    }
  },
  methods: {
    addTodo () {
      this.todos.push({
        title: this.inputValue,
        completed: false
      })
      this.inputValue = ''
    },
    toggleTodo (status, index) {
      this.todos[index].completed = status
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    }
  },
  created () {
    if (localStorage.getItem('todo-list')) {
      this.todos = JSON.parse(localStorage.getItem('todo-list'))
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: function (val) {
        localStorage.setItem('todo-list', JSON.stringify(val))
      }
    }
  }
}
</script>

<style>

</style>
