<template>
  <div class="songInfor">
    <el-image class="songImg" url=""></el-image>
    <div class="song--info">
      <div class="songName--singer">
        <span class="songName">L-O-V-E</span>
        <div class="singer" style="margin: 0rem 0.2rem">-</div>
        <span class="singer">凳子七</span>
      </div>
      <div class="songInfo--operation">
        <IconPark :icon="Like" size="1.4rem" />
        <IconPark :icon="DownloadTwo" size="1.4rem" />
        <IconPark :icon="Info" size="1.4rem" />
        <IconPark :icon="Comments" size="1.4rem" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Like, DownloadTwo, Info, Comments } from "@icon-park/vue-next";
import IconPark from "@/components/iconPark/index.vue";
</script>

<style lang="less" scoped>
.songInfor {
  display: flex;
  .songImg {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 0.4rem;
  }
  .song--info {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    .songName--singer {
      display: flex;
    }
    .singer {
      color: rgb(148 163 184);
    }
    .songInfo--operation {
      min-width: 10rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .songInfo--operation :hover {
      cursor: pointer;
      color: #34d399;
    }
  }
}
</style>
