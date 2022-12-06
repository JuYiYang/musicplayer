<template>
  <div class="searchPop">
    <el-popover placement="right" :visible="popVis" trigger="click">
      <template #reference>
        <el-input v-model="keyWord" placeholder="音乐诠释世界" clearable>
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
      </template>
      <span style="color: red"></span>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const popVis = ref<boolean>(false);

const keyWord = ref<string>("");
</script>

<style lang="less" scoped>
/deep/ .el-input__wrapper {
  width: 18rem;
  border-radius: 25px;
  background-color: rgb(241 245 249);
}
/deep/ .is-focus {
  box-shadow: 0px, 0px, 1px, rgb(52, 211, 153) !important;
}
</style>
