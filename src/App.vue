<template>
  <div id="app">
    <todo-background></todo-background>
    <div class="input-todo">
      <el-input placeholder="添加任务" v-model="inputValue"></el-input>
      <el-button @click="addTodo" icon="el-icon-plus" circle></el-button>
    </div>
    <ol class="todo-list">
      <todo-item v-for="(item,index) in todos" :key="index" :itemTitle="item.title" :itemIndex="index"
                 :itemCompleted="item.completed" @toggleItem="toggleTodo" @deleteItem="deleteTodo"></todo-item>
    </ol>
    <my-foot></my-foot>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import MyFoot from '@/components/MyFoot'
import TodoBackground from '@/components/TodoBackground'

export default {
  name: 'App',
  components: {
    TodoItem,
    MyFoot,
    TodoBackground
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

.input-todo {
  display: flex;
  width: 100%;
  justify-content: center;
}

.el-input {
  width: 200px;
  font-size: 20px;
}

.el-input__inner:focus {
  border-color: #9dad7f;
}

.el-button {
  font-size: 15px;
  margin-left: 5px;
  color: white;
  background: #9dad7f;
}

.el-button:focus, .el-button:hover {
  color: white;
  border-color: #9dad7f;
  background-color: #9dad7f;
}
</style>
