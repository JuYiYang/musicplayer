import axios, { type AxiosRequestConfig } from "axios";

const instance = axios.create({
  timeout: 2 * 1888,
  baseURL: "http://localhost:3000/",
  withCredentials: false,
});

instance.interceptors.request.use(
  (config) => {
    return {
      ...config,
      params: {
        ...config.params,
        t: Date.now(),
      },
    };
  },
  (err) => {
    throw new Error(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data ? res.data : res;
  },
  (err) => {
    throw new Error(err);
  }
);

export default <T = any>(config: AxiosRequestConfig<any>) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .request(config)
      .then((res) => {
        resolve(res.data ? res.data : (res as any));
      })
      .catch((err) => {
        reject(err);
      });
  });
};
