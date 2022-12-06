<template>
  <div class="nav_menu">
    <menuItem />
  </div>
</template>

<script lang="ts" setup>
import menuItem from "./item.vue";
</script>

<style lang="less" scoped>
.nav_menu {
  padding: 0.6rem;
  min-height: 100vh;
  background-color: var(--bg-main);
}
</style>
