'use client';

import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type ReactNode } from 'react';

// Create a custom hook for query client with enterprise-grade defaults
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // 5 minutes cache time for enterprise reliability
        staleTime: 5 * 60 * 1000,
        // Keep data in cache for 10 minutes
        gcTime: 10 * 60 * 1000,
        // Retry failed requests up to 3 times
        retry: 3,
        // Exponential backoff delay
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        // Don't refetch on window focus by default (enterprise setting)
        refetchOnWindowFocus: false,
        // Enable background refetching
        refetchOnReconnect: true,
        // Don't refetch on mount if data is fresh
        refetchOnMount: false,
      },
      mutations: {
        // Retry mutations once on failure
        retry: 1,
        // 30 second timeout for mutations
        // mutationKey timeout handled by React Query
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

interface QueryProviderProps {
  children: ReactNode;
  dehydratedState?: unknown;
}

export default function QueryProvider({ children, dehydratedState }: QueryProviderProps) {
  // NOTE: Avoid useState when initializing the query client if you don't
  // have a suspense boundary between this and the code that may
  // suspend because React will throw away the client on the initial
  // render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
        <ReactQueryDevtools 
          initialIsOpen={false} 
          buttonPosition="bottom-right"
          position="bottom"
        />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
