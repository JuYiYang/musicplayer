<template>
  <div class="searchBar">
    <div class="searchBar--left">
      <operationVue/>
    </div>
    <div class="user--info">
      <userOper/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import operationVue from "./left/operation.vue";
import userOper from "./userRight/index.vue";

</script>

<style lang="less" scoped>
.searchBar {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6.8rem;
}
</style>
