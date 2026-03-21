"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function QueryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        retryDelay: 300,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
