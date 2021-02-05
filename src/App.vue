<template>
  <div id="app">
    <todo-background></todo-background>
    <div class="input-todo">
      <el-input placeholder="添加任务" v-model="inputValue"></el-input>
      <el-button @click="handleAdd" icon="el-icon-plus" circle></el-button>
    </div>
    <ol class="todo-list">
      <todo-item v-for="(item,index) in todos" :key="index" :itemTitle="item.title" :itemIndex="index"
                 :itemCompleted="item.completed"></todo-item>
    </ol>
    <setting-panel></setting-panel>
    <my-foot></my-foot>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import MyFoot from '@/components/MyFoot'
import TodoBackground from '@/components/TodoBackground'
import SettingPanel from '@/components/SettingPanel'

import * as types from '@/store/mutationType.js'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoItem,
    MyFoot,
    TodoBackground,
    SettingPanel
  },
  computed: {
    ...mapState({
      todos: state => state.ListStore.todos,
      itemCount: state => state.ListStore.itemCount
    })
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapMutations({
      toGetList: types.GET_LIST,
      toAddList: types.ADD_LIST,
      toCountList: types.COUNT_LIST
    }),
    handleAdd () {
      this.toAddList({
        title: this.inputValue,
        completed: false
      })
      this.inputValue = ''
    }
  },
  created () {
    this.toGetList()
    this.toCountList()
  },
  watch: {
    todos: {
      deep: true,
      handler: function (val) {
        localStorage.setItem('todo-list', JSON.stringify(val))
        this.toCountList()
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
  justify-content: center;
  align-items: center;
}

.el-input {
  width: 30%;
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

.el-button:hover {
  color: white;
  border-color: #9dad7f;
  background-color: #9dad7f;
}

.el-button:focus {
  color: white;
  border-color: #c7cfb7;
  background-color: #9dad7f;
}
</style>
