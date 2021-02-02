<template>
  <li class="todo-item">
    <div class="item-content" @click="toggleMe" :class="{'completed-item':completedData}">
      <input type="checkbox" v-model="completedData"/>
      <label>{{ itemTitle }}</label>
    </div>
    <button @click="deleteMe">删除</button>
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
}
</style>
