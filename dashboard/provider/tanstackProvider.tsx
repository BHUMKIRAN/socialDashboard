"use client";

import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
  DehydratedState,
} from "@tanstack/react-query";

export const TanstackProvider: React.FC<{
  children: React.ReactNode;
  dehydratedState?: DehydratedState;
}> = ({ children, dehydratedState }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState as DehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default TanstackProvider;
