<template>
  <swiperWrapper />
  <subhead>独家放送</subhead>
  <div class="rersonalized flex">
    <template v-for="item in personalizedList">
      <CoverBox :url="item.picUrl" :depict="item.name" height="210px" />
    </template>
  </div>
  <subhead>推荐电台</subhead>
  <div class="recommend__FM flex">
    <template v-for="item in djprogramList">
      <CoverBox :url="item.picUrl" :depict="item.name" height="280px" />
    </template>
  </div>
  <subhead>推荐MV</subhead>
  <div class="recommend__FM flex">
    <template v-for="item in mvList">
      <CoverBox :url="item.picUrl" :depict="item.name" height="260px">
        <template #footer>
          <div class="fm__footer">
            <span>{{ item.name }}</span>
            <span>{{ item.artists[0].name }}</span>
          </div>
        </template>
      </CoverBox>
    </template>
  </div>
</template>
<script lang="ts" setup>
import {
  GetPersonalizedList,
  GetDjprogramList,
  GetMvList,
} from "@/api/handPick";
import CoverBox from "@/components/coverBox/index.vue";
import subhead from "@/components/subhead/index.vue";
import swiperWrapper from "@/pages/recommend/components/swiperWrapper/index.vue";

const { result: personalizedList } = await GetPersonalizedList({
  limit: 4,
  offset: 1,
});
const { result: djprogramList } = await GetDjprogramList();

const { result: mvList } = await GetMvList();

// console.log(result);
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
  div {
    margin: 0px 10px;
    flex: 1;
  }
}
.fm__footer {
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  align-items: flex-start;
}
</style>
