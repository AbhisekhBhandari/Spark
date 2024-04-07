"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { EdgeStoreProvider } from "../utils/edgestore";
// import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <EdgeStoreProvider>{props.children}</EdgeStoreProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}
