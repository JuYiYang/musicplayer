import request from "@/utils/request";

import type { Iserch, IHot } from "@/types/serch";

export const fuzzyQueryApi = (params: any) => {
  return request<Iserch>({
    url: "search/suggest",
    method: "get",
    params,
  });
};

export const hotSonsApi = (params?: string) => {
  return request<IHot>({
    url: "search/hot/detail",
    method: "get",
    params,
  });
};
