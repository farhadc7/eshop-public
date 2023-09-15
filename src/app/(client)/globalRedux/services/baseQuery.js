import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { baseUrl } from "../../../constants/constants";
export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.user?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "omit",
});
