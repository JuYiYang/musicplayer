<template>
  <div class="searchPop">
    <el-popover
      :v-model:visible="popVis"
      trigger="click"
      popper-style="max-width:auto;padding:0;"
      width="22rem"
    >
      <template #reference>
        <el-input
          v-model="keyWord"
          placeholder="音乐诠释世界"
          @input="antiShake(changeKey)"
          clearable
        >
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </template>
      <!-- <template #default> -->
      <div v-show="searchOut" class="search_result">
        <el-scrollbar height="40rem">
          <!-- 单曲 -->
          <div class="songs">
            <div class="title">单曲</div>
            <div
              class="matchVal hover_default"
              :key="item.id"
              v-for="item in searchOut?.songs"
            >
              <span class="matchSelect">{{ item.name }}</span>
              -
              <span>{{ item.artists[0].name }}</span>
            </div>
          </div>
          <!-- 歌手 -->
          <div class="artists">
            <div class="title">歌手</div>
            <div
              class="matchVal flexStart hover_default"
              :key="item.id"
              v-for="item in searchOut?.artists"
            >
              <img :src="item.img1v1Url" class="artists_pic" />
              <span class="matchSelect">{{ item.name }}</span>
            </div>
          </div>
          <!-- 专辑 -->
          <div class="albums">
            <div class="title">专辑</div>
            <div
              class="matchVal hover_default"
              :key="item.id"
              v-for="item in searchOut?.albums"
            >
              <span class="matchSelect">{{ item.name }}</span>
              -
              <span>{{ item.artist.name }}</span>
            </div>
          </div>
          <!-- 歌单 -->
          <div class="playlists">
            <div class="title">歌单</div>
            <div
              class="matchVal flexStart hover_default"
              v-for="item in searchOut?.playlists"
            >
              <img :src="item.coverImgUrl" class="artists_pic" />
              <span class="matchSelect">{{ item.name }}</span>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div v-show="!searchOut" class="search_result">
        <div class="title">热门搜索</div>
        <div class="hots" v-for="(item, index) in hotList">
          <div class="hots--item">
            <span>{{ index + 1 }}.</span>
            <span style="margin-left: 2px">{{ item.searchWord }}</span>
          </div>
          <div>
            <IconPark
              :icon="Fire"
              size="1.2rem"
              :fill="['#f06148', '#d33434', '#FFF', '#FFF']"
            ></IconPark>
            {{ item.score }}
          </div>
        </div>
      </div>
      <!-- </template> -->
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import antiShake from "@/utils/antiShake";

import { fuzzyQueryApi, hotSonsApi } from "@/api/search";

import type { Result, IHot } from "@/types/serch";
import { Fire } from "@icon-park/vue-next";
import IconPark from "@/components/iconPark/index.vue";
const popVis = ref<boolean>(false);

const keyWord = ref<string>("");

const searchOut = ref<Result>();

const hotList = ref<IHot>();

const getHotSons = async () => {
  hotList.value = await hotSonsApi();
};
getHotSons();
const changeKey = async () => {
  if (keyWord.value == "") return;
  const result = await fuzzyQueryApi({ keywords: keyWord.value });
  searchOut.value = result.result;
};
</script>

<style lang="less" scoped>
/deep/ .el-input__wrapper {
  width: 18rem;
  border-radius: 25px;
  background-color: rgb(241 245 249);
}
/deep/ .is-focus {
  box-shadow: 0px, 0px, 1px, rgb(52, 211, 153) !important;
}
.search_result {
  width: 100%;
  padding: 0.2rem 0.5rem;
  .title {
    font-size: 1.4rem;
    padding: 0.5rem 0rem;
  }
  .flexStart {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .matchVal {
    padding: 0.5rem;
    font-size: 1.2rem;
    .artists_pic {
      margin-right: 0.5rem;
      overflow: hidden;
      background-color: #3a3a3a;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .matchSelect {
      color: var(--match-text-default);
    }
  }
  // background-color: red;
}
.hots {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  .hots--item {
    font-size: 1.2rem;
  }
}
</style>
