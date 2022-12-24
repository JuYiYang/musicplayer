<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <navBar />
      </el-aside>
      <el-container>
        <el-header><serchBar /></el-header>
        <el-main>
          <el-scrollbar> <router-view /></el-scrollbar>
        </el-main>
        <el-footer> <player /> </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import navBar from "@/components/navBar/index.vue";
import serchBar from "@/components/serchBar/index.vue";
import player from "@/components/player/index.vue";
</script>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  // height: 100%;
  min-height: 100vh;
}
.el-footer {
  padding: 0rem;
  height: 8rem;
}
.el-main {
  overflow-y: auto;
}
.el-scrollbar {
  height: calc(100vh - 100px - 8rem);
}
</style>
