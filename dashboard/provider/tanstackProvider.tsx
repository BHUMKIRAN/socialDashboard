"use client";

import React from "react";
import {
  QueryClientProvider,
  HydrationBoundary,
  DehydratedState,
} from "@tanstack/react-query";
import { makeQueryClient } from "@/service/queryClient";

export const TanstackProvider: React.FC<{
  children: React.ReactNode;
  dehydratedState?: DehydratedState;
}> = ({ children, dehydratedState }) => {
  const [queryClient] = React.useState(() => makeQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState as DehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default TanstackProvider;
