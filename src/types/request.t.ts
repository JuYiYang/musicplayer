export interface Options {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  params?: any;
  headers?: any;
}
