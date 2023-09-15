import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
export const readersApi = createApi({
  reducerPath: "readers",
  baseQuery,
  endpoints: (builder) => ({
    bannerList: builder.mutation({
      query(body) {
        return {
          url: "/api/landing-page/v1/get-headers",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useBannerListMutation } = readersApi;
