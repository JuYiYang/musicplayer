<template>
  <div class="playCover">
    <div class="playCover__item" v-for="item in result" :key="item.id">
      <coverBox
        :url="item.picUrl"
        :depict="item.name"
        :play-count="item.playCount"
      ></coverBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { recommendPlayListApi } from "@/api/recommend";
import coverBox from "@/components/coverBox/index.vue";
const { result } = await recommendPlayListApi({ limit: 16 });
</script>

<style lang="less" scoped>
.playCover {
  display: flex;
  flex-wrap: wrap;
  &__item {
    margin: 10px;
    flex: 1;
  }
}
</style>
