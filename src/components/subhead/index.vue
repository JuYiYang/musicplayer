<template>
  <div class="subhead">
    <slot></slot>
    <el-icon v-if="!isHiddenIcon">
      <ArrowRight />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isHiddenIcon?: boolean;
}>();
</script>
<style lang="less" scoped>
.subhead {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
}
</style>
