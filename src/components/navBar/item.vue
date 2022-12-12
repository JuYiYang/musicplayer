<template>
  <ElScrollbar>
    <div v-for="item in menuList" class="pl-6 mt-10 pr-6">
      <div class="menu--title menu--item">
        {{ item.name }}
      </div>
      <template v-if="item.children">
        <div
          :class="{
            'active-bg-main': currentKey == childrenItem.key,
            'hover-bg-mian': currentKey != childrenItem.key,
          }"
          class="menu--item menu-children"
          v-for="childrenItem in item.children"
          @click="click(childrenItem.key)"
        >
          <div class="iconW">
            <template v-if="childrenItem.icon">
              <IconPark :icon="childrenItem.icon" :size="'1.6rem'"></IconPark>
            </template>
          </div>
          <span class="menuName">{{ childrenItem.name }}</span>
        </div>
      </template>
    </div>
  </ElScrollbar>
</template>

<script lang="ts" setup>
import IconPark from "@/components/iconPark/index.vue";
import { useMenu } from "./useMenu";

const { menuList, currentKey, click } = useMenu();
</script>

<style lang="less" scoped>
.menu--item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.2rem;
}
.menu-children {
  font-size: 1.4rem;
  border-radius: 0.4rem;
}
.iconW {
  width: 2.4rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menuName {
  margin: 0.5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  min-width: 4.2rem;
  height: 2.2rem;
}
</style>
