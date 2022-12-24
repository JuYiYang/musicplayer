<template>
  <Swiper
    slides-per-group-auto
    slides-per-view="auto"
    :grab-cursor="true"
    class="mySwiper my-button-hidden"
  >
    <template v-for="item in banners" :key="item.bannerId">
      <SwiperSlide>
        <img :src="item.pic" alt="" class="banner__pic" />
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

import { reactive } from "vue";

import { iosBannnerApi } from "@/api/recommend";

const modules = reactive([Navigation]);

const { banners } = await iosBannnerApi({ type: "1" });
</script>

<style lang="less" scoped>
.mySwiper {
  width: 100%;
  height: 100%;
  .swiper-slide {
    width: 32rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .swiper-slide:hover {
    transform: scale(1.2);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
  }
}
@media (max-width: 1024px) {
  .mySwiper {
    .swiper-slide {
      width: 50% !important;
    }
    .banner__pic {
      object-fit: contain;
    }
  }
}
.banner__pic {
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
