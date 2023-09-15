"use client";
import { ThemeProvider } from "next-themes";
import { store } from "./store";
import { Provider } from "react-redux";

import ClientComponent from "./ClientComponent";
export function Providers({ children }) {
  return (
    <Provider store={store}>
      {" "}
      <ThemeProvider attribute="class">
        <ClientComponent>{children}</ClientComponent>
      </ThemeProvider>
    </Provider>
  );
}
