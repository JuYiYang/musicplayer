import { defineStore } from "pinia";

import { loginReq } from "@/api/login";

import type { Iprofile } from "@/types/login";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      cookie: "",
      userProfile: {} as Iprofile,
    };
  },
  getters: {
    isLogin: (state) => state.token,
  },
  actions: {
    async userLogin(phone: string | number, password: string) {
      const result = await loginReq({
        phone,
        password,
      });
      if (result.code == 200) {
        const { cookie, token, profile } = result;
        this.token = token;
        this.cookie = cookie;
        document.cookie = cookie;
        localStorage.setItem("token", token);
        localStorage.setItem("cookie", cookie);
        this.userProfile = profile;
      }
    },
    setCookie(cookie: string) {
      this.cookie = cookie;
      document.cookie = cookie;
    },
  },
});
