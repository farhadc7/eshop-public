"use client";

import { useState } from "react";

const CommentCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const clickHanlder = (event) => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex items-center justify-center mx-2 ">
        <div className="rounded-xl border p-5 shadow-md w-full bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
              <div className="text-lg font-bold text-slate-700">
                {item.username}{" "}
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-xs text-neutral-500">{item.date}</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">{item.title}</div>
            <div className="text-sm text-neutral-600">
              {show
                ? item.desciption
                : item.desciption.length > 250
                ? `${item.desciption.substring(0, 250)}...`
                : item.desciption}
            </div>
          </div>

          <div>
            <div className="flex items-center  justify-between text-slate-500">
              <button
                onClick={(e) => {
                  clickHanlder(e);
                }}
                type="button"
                className="rounded-md px-5 w-2/5 text-white bg-bgBtn shadow-lg text-center py-2  "
              >
                {show ? "close" : "more"}
              </button>
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>{item.id}</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>{item.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
