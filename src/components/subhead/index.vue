<template>
  <div class="subhead">
    <slot></slot>
    <el-icon>
      <ArrowRight />
    </el-icon>
  </div>
</template>

<style lang="less" scoped>
.subhead {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
}
</style>
