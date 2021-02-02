<template>
  <div id="app">
    <div class="input-todo">
      <el-input placeholder="添加任务" v-model="inputValue" style="font-size: 20px;"></el-input>
      <el-button @click="addTodo" icon="el-icon-plus" style="font-size: 15px;margin-left: 5px;color: white;background: #9dad7f;" circle></el-button>
    </div>
    <ol class="todo-list">
      <todo-item v-for="(item,index) in todos" :key="index" :itemTitle="item.title" :itemIndex="index"
                 :itemCompleted="item.completed" @toggleItem="toggleTodo" @deleteItem="deleteTodo"></todo-item>
    </ol>
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
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center; /*看起来没有完全居中的原因是每一项前面有没显示的序号，因为每一项都是display:flex，所以不显示序号*/
}
.input-todo{
  display: flex;
  width: 25%;
  margin: auto;
}
</style>
