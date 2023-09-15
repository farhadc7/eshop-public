import http from "./httpService"
export function getBanner() {
  return http.get("/api/landing-page/v1/get-headers");
}
