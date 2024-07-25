import { QueryClient } from "@tanstack/query-core";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const ReactQueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
