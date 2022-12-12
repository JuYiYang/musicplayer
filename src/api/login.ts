import request from "@/utils/request";
import type {
  IloginPhone,
  IQRlogin,
  IqrImg,
  IqrStatus,
  IqrStatusBack,
} from "@/types/login";

type Params = {
  phone: string | number;
  password: string;
};

export const loginReq = (params: Params) => {
  return request<IloginPhone>({
    url: "login/cellphone",
    method: "get",
    params,
  });
};

export const getQrKey = () => {
  return request<IQRlogin>({
    url: "login/qr/key",
    method: "get",
  });
};

export const getQRimgApi = (params: IqrStatusBack) => {
  return request<IqrImg>({
    url: "login/qr/create",
    method: "get",
    params,
  });
};

export const getQrLoginStatus = (params: any) => {
  return request<IqrStatus>({
    url: "login/qr/check",
    method: "get",
    params,
  });
};
// type UserInfo = {
//
// }
// export const getUserInfoApi = () => {
//
// }
