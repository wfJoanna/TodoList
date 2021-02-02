<template>
  <li class="todo-item">
    <div class="item-content" @click="toggle" :class="{'completed-item':completedData}">
      <input type="checkbox" v-model="completedData"/>
      <label>{{ content }}</label>
    </div>
    <button @click="deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['content', 'index', 'completed'],
  data () {
    return {
      completedData: this.completed
    }
  },
  methods: {
    toggle () {
      this.completedData = !this.completedData
      this.$emit('toggle', this.completedData, this.index)
    },
    deleteItem () {
      this.$emit('deleteItem', this.index)
    }
  }
}
</script>

<style scoped>
.completed-item {
  text-decoration: line-through;
}
</style>
