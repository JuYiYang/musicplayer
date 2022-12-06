<template>
  <el-slider v-model="stepRef" :show-tooltip="false" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    step?: string | number;
  }>(),
  {
    step: 1,
  }
);
const stepRef = ref(props.step);
</script>

<style lang="less" scoped>
.el-slider {
  height: 1rem;
}
</style>
