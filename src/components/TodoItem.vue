<template>
  <li class="todo-item" @click="handleClick">{{ content }}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['content', 'index'],
  methods: {
    handleClick: function () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<style scoped>

</style>
