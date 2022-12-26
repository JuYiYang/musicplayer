<template>
  <div class="recommend">
    <Suspense>
      <template #default>
        <div class="recommend__main">
          <mainHeading>推荐</mainHeading>
          <div class="recommend__bannerWraper">
            <bannerWraper />
          </div>
          <subhead>你的专属歌单</subhead>
          <div class="recommend__song">
            <songCover />
          </div>
          <subhead>推荐新音乐</subhead>
          <div class="recommend__newSong">
            <newSong />
          </div>
          <subhead>推荐MV</subhead>
          <div class="recommend__mv">
            <musicVideo />
          </div>
        </div>
      </template>
      <template #fallback>
        <span style="color: red">Looding....</span>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import mainHeading from "@/components/mainHeading/index.vue";
import subhead from "@/components/subhead/index.vue";
import bannerWraper from "./components/swiperWrapper/index.vue";
import songCover from "./components/songCover/index.vue";
import newSong from "./components/newSong/index.vue";
import musicVideo from "./components/musicVideo/index.vue";
</script>

<style lang="less" scoped>
.recommend {
  &__main {
    h1 {
      font-weight: 800;
      font-size: 2.6rem;
    }
  }
  &__bannerWraper {
    // width: 100%;
    height: 14rem;
  }
}
</style>
