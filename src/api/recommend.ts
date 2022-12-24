import request from "@/utils/request";

import type {
  IBannerParams,
  IBannerRes,
  IPlayList,
  INewSong,
  IMvRes,
} from "./types/recommend";

export const iosBannnerApi = (params: IBannerParams) => {
  return request<IBannerRes>({
    url: "/banner",
    method: "get",
    params,
  });
};

type limt = {
  limit: number;
};
export const recommendPlayListApi = (params: limt = { limit: 30 }) => {
  return request<IPlayList>({
    url: "/personalized/",
    method: "get",
    params,
  });
};

export const recommendNewSongAPi = (params: limt = { limit: 10 }) => {
  return request<INewSong>({
    url: "/personalized/newsong",
    method: "get",
    params,
  });
};

export const recommendMvApi = () => {
  return request<IMvRes>({
    url: "/personalized/mv",
    method: "get",
  });
};
