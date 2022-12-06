<template>
  <div class="userOperation">
    <div class="pic">
      <el-image
        class="pic"
        src="http://p1.music.126.net/ZAhrg0d7gskFxN7HXQ3-Uw==/109951165168055498.jpg"
        :preview-src-list="[
          'http://p1.music.126.net/ZAhrg0d7gskFxN7HXQ3-Uw==/109951165168055498.jpg',
        ]"
        fit="cover"
      />
    </div>
    <p class="username">拉布拉多PLUS</p>
    <IconPark :icon="Remind" :size="'1.4rem'" />
    <IconPark :icon="Platte" :size="'1.4rem'" />
    <IconPark :icon="Application" :size="'1.4rem'" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import IconPark from "@/components/iconPark/index.vue";
import { Remind, Platte, Application } from "@icon-park/vue-next";
</script>

<style lang="less" scoped>
.userOperation {
  display: flex;
  align-items: center;
}
.userOperation > * {
  display: inline-block;
  margin: 0.4rem;
}

.userOperation > * :hover {
  cursor: pointer;
  color: rgb(52, 211, 153);
}
.username:hover {
  cursor: pointer;
  color: rgb(52, 211, 153);
}

.pic {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
}
</style>
