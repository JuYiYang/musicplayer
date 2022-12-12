<template>
  <el-dialog
    v-model="dialogVisible"
    :show-close="false"
    width="300px"
    center
    align-center
    append-to-body
    @close="close"
  >
    <div class="qr--img">
      <img :src="qrImg" alt="" />
      <div class="mask" v-if="qrStatus != 801">
        {{
          qrStatus === 801
            ? "等待扫码"
            : qrStatus === 802
            ? "待确认"
            : qrStatus === 803
            ? "授权登录成功"
            : "二维码过期"
        }}
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";

import { getQrKey, getQRimgApi, getQrLoginStatus } from "@/api/login";
import { useUserStore } from "@/store/user";

const props = defineProps<{
  value: boolean;
}>();

const dialogVisible = ref(props.value);

watch(
  () => props.value,
  (n, o) => {
    clearInterval(poll.value);
    dialogVisible.value = n;
    if (n) init();
  }
);

const poll = ref();
const userStore = useUserStore();

const qrStatus = ref<number>(801);

const qrKey = ref<string>("");

const qrImg = ref();

const init = async () => {
  const { unikey } = await getQrKey();
  qrKey.value = unikey;
  const { qrimg } = await getQRimgApi({
    key: qrKey.value,
    qrimg: true,
  });
  qrImg.value = qrimg;
  qrStatus.value = 801;

  poll.value = setInterval(async () => {
    const { code, cookie } = await getQrLoginStatus({ key: qrKey.value });
    qrStatus.value = code;
    if (cookie != "") userStore.setCookie(cookie as string);
  }, 5000);
};

const emits = defineEmits(["update:value"]);

const close = () => {
  emits("update:value", false);
};
</script>

<style lang="less" scoped>
.qr--img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.99);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(52, 211, 153);
  }
}
</style>
