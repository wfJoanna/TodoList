<template>
  <div class="foot-info">
    <p>Created by <a href="https://github.com/wfJoanna">wfJoanna顽风</a></p>
  </div>
</template>

<script>
export default {
  name: 'MyFoot'
}
</script>

<style scoped>
.foot-info {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #9dad7f;
  border-top: 1px solid #9dad7f;
  z-index: -1;
}

a {
  text-decoration: none;
  color: #557174;
}
</style>
