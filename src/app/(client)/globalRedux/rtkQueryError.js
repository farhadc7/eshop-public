import {
  isAsyncThunkAction,
  isFulfilled,
  isPending,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

import { toast } from "react-toastify";
export const rtkQueryErrorHandler =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action?.payload) {
      if (action?.payload?.status === "FETCH_ERROR") {
        // dispatch(logout());
        toast.error("سرور در حال راه اندازی می  باشد");
      }
      if (action?.payload?.status == 500) {
        toast.error("سرویس در حال راه اندازی است ");
        dispatch(logout());
      } else {
        if (action?.payload?.status == 200) {
          toast.error("موفق");
  
        } else if (400 <= action?.payload?.status < 500) {
   
          toast.error("ناموفق");
        } else {
          toast.error("متاسفانه مشکلی پیش آمده است");
        }
      }
    }
    if (isRejectedWithValue(action)) {
      if (action?.payload?.status === 401) {
        next(logout());
      }
    } else {
      if (isPending(action)) {
 
      } else if (
        isFulfilled(action) ||
        isRejected(action) ||
        isRejectedWithValue(action)
      ) {
      
      }
    }
    return next(action);
  };
