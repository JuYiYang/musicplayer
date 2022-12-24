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
    <p class="username" v-show="isLogin">拉布拉多PLUS</p>
    <p class="username" v-show="!isLogin" @click="showDialog = !showDialog">
      立即登录
    </p>
    <IconPark :icon="Remind" :size="'1.4rem'" />
    <IconPark :icon="Platte" :size="'1.4rem'" />
    <IconPark :icon="Application" :size="'1.4rem'" />
    <el-dialog v-model="showDialog" width="25vw" title="Die quickly login">
      <el-row>
        <el-form
          ref="ruleFormRef"
          :model="formData"
          :rules="rules"
          label-width="88"
          class="demo-ruleForm"
          :size="'default'"
          status-icon
          style="width: 100%"
        >
          <el-col>
            <el-form-item label="username" prop="name">
              <el-input v-model="formData.name" clearable />
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="password" prop="password">
              <el-input
                v-model="formData.password"
                show-password
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <template #footer>
        <div class="footer--btn">
          <el-link>验证码登录</el-link>
          <el-button type="primary" @click="login"> 立即登录 </el-button>
          <IconPark
            :icon="TwoDimensionalCode"
            :size="'2.4rem'"
            @click="QRLogin"
          ></IconPark>
        </div>
      </template>
    </el-dialog>
    <QRcom v-model:value="qrVisible" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import QRcom from "@/components/QR/index.vue";
import IconPark from "@/components/iconPark/index.vue";
import {
  Remind,
  Platte,
  Application,
  TwoDimensionalCode,
} from "@icon-park/vue-next";
import { useUserStore } from "@/store/user";
import type { loginForm } from "./type";
import type { FormRules } from "element-plus";

const rules = reactive<FormRules>({
  name: [{ required: true, message: "Place fill your name", trigger: "blur" }],
  password: [
    { required: true, message: "Place fill your password", trigger: "blur" },
  ],
});

const showDialog = ref(false);

const ruleFormRef = ref();

const formData = reactive<loginForm>({
  name: "",
  password: "",
});

const { isLogin, userLogin } = useUserStore();

const login = (): void => {
  ruleFormRef.value.validate((isValid: boolean) => {
    if (!isValid) return;
    userLogin(formData.name, formData.password);
  });
};
const qrVisible = ref(false);
const QRLogin = (): void => {
  qrVisible.value = true;
};
</script>

<style lang="less" scoped>
.userOperation {
  display: flex;
  align-items: center;

  /deep/ .el-dialog__footer {
    .footer--btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
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
