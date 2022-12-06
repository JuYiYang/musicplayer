<template>
  <Component :is="icon" :theme="theme" :size="size" />
</template>

<script lang="ts" setup>
import type { Icon } from "@icon-park/vue-next/lib/runtime";
defineProps<{
  icon?: Icon;
  theme?: string;
  size?: string | number;
}>();
</script>

<style lang="less" scoped>
.i-icon {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
