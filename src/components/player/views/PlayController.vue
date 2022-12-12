<template>
  <div class="playController">
    <IconPark :icon="PlayCycle" size="1.4rem" :fill="iconColor" />
    <IconPark :icon="Left" size="1.8rem" :fill="iconColor" />
    <IconPark
      :icon="PauseOne"
      size="2.8rem"
      :fill="fills"
      theme="multi-color"
    />
    <IconPark :icon="Right" size="1.8rem" :fill="iconColor" />
    <IconPark :icon="VolumeNotice" size="1.4rem" :fill="iconColor" />
  </div>
</template>

<script lang="ts" setup>
import {
  PlayCycle,
  Left,
  Right,
  Play,
  PauseOne,
  VolumeNotice,
} from "@icon-park/vue-next";
import IconPark from "@/components/iconPark/index.vue";
const iconColor = "#2c3e50";
const fills = ["#34d399", "#34d399", "#fff", "#fff"];
</script>

<style lang="less" scoped>
.playController {
  width: 12rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
