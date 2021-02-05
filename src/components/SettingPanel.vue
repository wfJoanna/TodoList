<template>
  <div class="setting-panel">

    <span>{{ itemCount }} item to do</span>

    <el-button-group>
      <el-button class="filter-button alive" @click="handleFilter($event,'all')">all</el-button>
      <el-button class="filter-button" @click="handleFilter($event,'todo')">todo</el-button>
      <el-button class="filter-button" @click="handleFilter($event,'completed')">completed</el-button>
    </el-button-group>

    <el-button-group>
      <el-button @click="handleFinish">一键完成全部</el-button>
      <el-button @click="handleDelete">一键删除已完成任务</el-button>
    </el-button-group>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/mutationType.js'

export default {
  name: 'SettingPanel',
  computed: {
    ...mapState({
      itemCount: state => state.ListStore.itemCount
    })
  },
  methods: {
    ...mapMutations({
      toToggleFilter: types.TOGGLE_FILTER
    }),
    handleFilter (e, condition) {
      this.toToggleFilter(condition)
      for (const t of document.getElementsByClassName('filter-button')) {
        t.style.background = '#9dad7f'
      }
      e.currentTarget.style.background = '#557174'
    }
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
}

.filter-button.alive {
  background: #557174;
}
</style>
