<template>
  <div class="musicVideo">
    <div class="musicVideo__item" v-for="item in result" :key="item.id">
      <coverBox
        :url="item.picUrl"
        :depict="item.name"
        :play-count="item.playCount"
        :style="pattern"
        :hearingIcon="Play"
      >
        <template #footer>
          <div class="footer">
            <span class="mv__depict">{{ item.name }}</span>
            <span class="mv__name">{{ item.artistName }}</span>
          </div>
        </template>
      </coverBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import coverBox from "@/components/coverBox/index.vue";
import { recommendMvApi } from "@/api/recommend";

import { Play } from "@icon-park/vue-next";
const { result } = await recommendMvApi();

const pattern = {
  width: "100%",
  height: "100%",
};
</script>

<style lang="less" scoped>
.musicVideo {
  display: flex;
  flex-wrap: wrap;
  &__item {
    margin: 10px;
    flex: 1;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .mv__name {
      // font-size: 12px;
      color: #9a9a9a;
    }
  }
}
</style>
