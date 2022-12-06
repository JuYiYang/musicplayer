<template>
  <div class="search">
    <div class="back--homepage">
      <IconPark :size="'1.4rem'" :icon="BackOne"></IconPark>
      <IconPark :size="'1.4rem'" :icon="GoAhead"></IconPark>
    </div>
    <seachPop />
  </div>
</template>

<script lang="ts" setup>
import { BackOne, GoAhead } from "@icon-park/vue-next";
import IconPark from "@/components/iconPark/index.vue";
import seachPop from "./seachPop.vue";
</script>

<style lang="less" scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24rem;
}
.back--homepage {
  width: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
</style>
