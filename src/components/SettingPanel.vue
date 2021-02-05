<template>
  <div class="setting-panel">

    <span>{{ itemCount }} item to do</span>

    <el-button-group>
      <el-button @click="handleAll">all</el-button>
      <el-button @click="handleTodo">todo</el-button>
      <el-button @click="handleCompleted">completed</el-button>
    </el-button-group>

    <el-button-group>
      <el-button @click="handleFinish">一键完成全部</el-button>
      <el-button @click="handleDelete">一键删除已完成任务</el-button>
    </el-button-group>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SettingPanel',
  computed: {
    ...mapState({
      itemCount: state => state.ListStore.itemCount
    })
  }
}
</script>

<style scoped>
span {
  margin: 0 5px;
  color: #9dad7f;
}

.setting-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101; /*没能覆盖footer*/
}
</style>
