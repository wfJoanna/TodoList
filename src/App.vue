<template>
  <div id="app">
    <input v-model="inputValue"/>
    <button @click="handleSubmit">提交</button>
    <ul>
      <todo-item v-for="(item,index) in list" :key="index" :content="item" :index="index"
                 @delete="handleDelete"></todo-item>
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
      list: [],
      inputValue: ''
    }
  },
  methods: {
    handleSubmit: function () {
      this.list.push(this.inputValue)
      localStorage.setItem('todo-list', JSON.stringify(this.list))
      this.inputValue = ''
    },
    handleDelete: function (index) {
      this.list.splice(index, 1)
      localStorage.setItem('todo-list', JSON.stringify(this.list))
    }
  },
  created () {
    if (localStorage.getItem('todo-list')) {
      this.list = JSON.parse(localStorage.getItem('todo-list'))
    }
  }
}
</script>

<style>

</style>
