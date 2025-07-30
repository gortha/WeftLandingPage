import { QueryClient, dehydrate } from '@tanstack/react-query';

// Server-side query client for SSR
export function createServerQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Longer stale time for SSR to reduce unnecessary refetches
        staleTime: 60 * 1000, // 1 minute
        // Don't retry on the server
        retry: false,
      },
    },
  });
}

// For now, we'll return empty dehydrated state to avoid Decimal serialization issues
// In the future, we can implement SSR-compatible data serialization
export async function prefetchAppData() {
  const queryClient = createServerQueryClient();

  // We can add simple prefetching here later that doesn't use Decimal objects
  // For now, we'll just return the empty query client

  return {
    queryClient,
    dehydratedState: dehydrate(queryClient),
  };
}

// Specific prefetch functions for individual pages if needed
export async function prefetchHeroData() {
  const queryClient = createServerQueryClient();
  
  // No prefetching for now to avoid Decimal serialization issues
  
  return dehydrate(queryClient);
}

export async function prefetchStakingData() {
  const queryClient = createServerQueryClient();
  
  // No prefetching for now to avoid Decimal serialization issues
  
  return dehydrate(queryClient);
}
