<template>
  <li class="todo-item">
    <div class="item-content" @click="toggleMe" :class="{'completed-item':completedData}">
      <input class="item-checkbox" type="checkbox" v-model="completedData"/>
      <label>{{ itemTitle }}</label>
    </div>
    <i class="el-icon-delete" @click="deleteMe"></i>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['itemTitle', 'itemIndex', 'itemCompleted'],
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
    toggleMe () {
      this.completedData = !this.completedData
      this.$emit('toggleItem', this.completedData, this.itemIndex)
    },
    deleteMe () {
      this.$emit('deleteItem', this.itemIndex)
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
  z-index: 100;
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
