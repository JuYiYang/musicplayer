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
  /deep/ .el-slider__button-wrapper {
    display: none;
    width: 2.4rem;
    height: 2.4rem;
    top: -1rem;
    .el-slider__button {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
}
.el-slider :active /deep/ .el-slider__button-wrapper {
  display: block;
}
.el-slider :hover /deep/ .el-slider__button-wrapper {
  display: block;
}
</style>
