<template>
  <div
    class="cover__box"
    :style="{
      width,
      height,
      ...style,
    }"
  >
    <el-image :src="url" fit="cover"></el-image>
    <div class="mask">
      <IconPack :icon="PlayOne" :size="36" theme="filled"></IconPack>
    </div>
    <div class="hearing" v-if="playCount">
      <IconPack :icon="hearingIcon"></IconPack>
      <span class="hearing__count">{{ useNumberFormat(playCount) }}</span>
    </div>
    <p class="cover__depict">
      <slot name="footer">{{ depict }}</slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
import IconPack from "@/components/iconPark/index.vue";

import { Headset, PlayOne } from "@icon-park/vue-next";

import { useNumberFormat } from "@/utils/uitls";

withDefaults(
  defineProps<{
    url: string;
    depict: string;
    width?: string;
    height?: string;
    style?: any;
    playCount?: number;
    hearingIcon?: any;
  }>(),
  {
    width: "150px",
    height: "165px",
    hearingIcon: Headset,
  }
);
</script>

<style lang="less" scoped>
.cover__box:hover {
  .mask {
    opacity: 1;
    /deep/ .i-icon {
      color: rgb(255, 255, 255);
    }
    /deep/ .i-icon:hover {
      color: var(--el-color-primary);
    }
  }
  .hearing {
    display: none;
  }
}
.hearing {
  padding: 1px 5px;
  position: absolute;
  bottom: calc(25% + 5px);
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  color: rgb(255, 255, 255);
  display: flex;
  &__count {
    margin-left: 5px;
    font-size: 12px;
  }
}
.cover__box {
  position: relative;
  overflow: hidden;

  .el-image {
    width: 100%;
    height: 75%;
    border-radius: 8px;
  }
  .mask {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    opacity: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 75%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.6);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }
  .cover__depict {
    height: 25%;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
