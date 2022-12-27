import request from "@/utils/request";
import type {
  RersonalizedRes,
  DjprogramRes,
  MvRes,
} from "@/api/types/handPick";
type Pading = {
  limit: number;
  offset: number;
};
export const GetPersonalizedList = (params: Pading) => {
  return request<RersonalizedRes>({
    url: "/personalized/privatecontent/list",
    method: "get",
    params,
  });
};

export const GetDjprogramList = () => {
  return request<DjprogramRes>({
    url: "/personalized/djprogram",
    method: "get",
  });
};

export const GetMvList = () => {
  return request<MvRes>({
    url: "/personalized/mv",
    method: "get",
  });
};

// export const Get
