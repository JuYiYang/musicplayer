<template>
  <div class="mainHeading">
    <h1><slot> 主标题 </slot></h1>
  </div>
</template>

<style lang="less" scoped>
.mainHeading {
  margin-bottom: 1rem;
  h1 {
    font-weight: 800;
    font-size: 2.6rem;
  }
}
</style>
