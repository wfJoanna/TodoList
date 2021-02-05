<template>
  <li class="todo-item" v-if="ifFilter">
    <div class="item-content" @click="toggleMe" :class="{'completed-item':completedData}">
      <input class="item-checkbox" type="checkbox" v-model="completedData"/>
      <label>{{ itemTitle }}</label>
    </div>
    <i class="el-icon-delete" @click="deleteMe"></i>
  </li>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/mutationType'

export default {
  name: 'TodoItem',
  props: ['itemTitle', 'itemIndex', 'itemCompleted'],
  computed: {
    ...mapState({
      filterState: state => state.ListStore.filterState
    }),
    ifFilter () {
      if (this.filterState === 'todo' && this.completedData === true) return false
      else if (this.filterState === 'completed' && this.completedData === false) return false
      else return true
    }
  },
  data () {
    return {
      completedData: this.itemCompleted
    }
  },
  watch: {
    itemCompleted (val) {
      this.completedData = val
    }
  },
  methods: {
    ...mapMutations({
      toToggleItem: types.TOGGLE_ITEM,
      toDeleteItem: types.DELETE_ITEM
    }),
    toggleMe () {
      this.toToggleItem({
        status: !this.completedData,
        index: this.itemIndex
      })
    },
    deleteMe () {
      this.toDeleteItem(this.itemIndex)
    }
  }
}
</script>

<style scoped>
.completed-item {
  text-decoration: line-through;
  color: #9dad7f;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  border: 1px solid #557174;
  padding: 2px;
  margin-top: -1px; /*解决了border重叠成2px的问题*/
  color: #557174;
  font-size: 30px;
  margin-left: -5%; /*解决了不完全居中问题*/
}

.item-content {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px 2px 0px 0px;
  background: #f7f7e8;
  overflow: auto;
}

.item-content:hover, .el-icon-delete:hover {
  cursor: pointer;
}

.el-icon-delete {
  background: #f7f7e8;
  margin: 2px;
}
</style>
