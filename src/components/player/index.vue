<template>
  <div class="playerBox">
    <header><ProgressBar /></header>
    <div class="playerBox-main">
      <div class="song">
        <div><SongInfor /></div>
        <div><PlayController /></div>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProgressBar from "./views/ProgressBar.vue";
import SongInfor from "./views/SongInfor.vue";
import PlayController from "./views/PlayController.vue";
</script>

<style lang="less" scoped>
.playerBox-main {
  padding: 1.5rem;
  .song {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
