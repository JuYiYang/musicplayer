<template>
  <Component :is="IconShallow" :theme="theme" :size="size" :fill="fill" />
</template>

<script lang="ts" setup>
import { toRaw } from "vue";
import type { Icon } from "@icon-park/vue-next/lib/runtime";
const props = defineProps<{
  icon?: Icon;
  theme?: string;
  size?: string | number;
  fill?: string | string[];
}>();
//  toRaw 让返回reactive或readonly代理的原始对象，会解包，对ref变量无效
// 不去响应式的话，传递过来的icon是隐式ref
const IconShallow = toRaw(props.icon);
</script>

<style lang="less" scoped>
.i-icon {
  width: v-bind(size);
  height: v-bind(size);
  color: #94a3b8;
}
</style>
