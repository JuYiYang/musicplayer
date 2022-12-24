<template>
  <div class="song_ranking">
    <div v-for="item in result" :key="item.id" class="song__ranking--item">
      <el-image :src="item.picUrl" />
      <div class="song__info">
        <span>{{ item.name }}</span>
        <span>{{ item.song.artists[0].name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { recommendNewSongAPi } from "@/api/recommend";
const { result } = await recommendNewSongAPi();
</script>

<style lang="less" scoped>
.song_ranking {
  display: flex;
  flex-wrap: wrap;
  .song__ranking--item:hover {
    background-color: rgb(245, 245, 244, 0.6);
  }
  .song__ranking--item {
    width: calc((100% / 5) - 20px);
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .el-image {
      width: 48px;
      height: 48px;
      border-radius: 4px;
    }
    .song__info {
      height: 100%;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
    }
  }
}
</style>
