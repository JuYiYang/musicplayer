<template>
  <div class="musicHall">
    <mainHeading>音乐馆</mainHeading>
    <el-tabs v-model="activeMenuName" @tab-click="handleMenuClick">
      <el-tab-pane
        v-for="item in menus"
        :label="item.label"
        :name="item.name"
        >{{ item.name }}</el-tab-pane
      >
    </el-tabs>
    <div class="musicHall__main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mainHeading from "@/components/mainHeading/index.vue";
import { useMusicHallMenu } from "./musicHallcontrol";

const { activeMenuName, handleMenuClick, menus } = useMusicHallMenu();
</script>

<style lang="less" scoped>
.musicHall {
  /deep/ .el-tabs__nav-wrap::after {
    height: 0px !important;
  }
}
</style>
