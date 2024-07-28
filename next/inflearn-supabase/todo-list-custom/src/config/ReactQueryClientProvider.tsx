"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const queryClient = new QueryClient();

const ReactQueryClientProvider = ({ children }: PropsType) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
