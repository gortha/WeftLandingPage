'use client';

import { useQuery, useQueries } from '@tanstack/react-query';
import { 
  fetchStakingData, 
  fetchPoolData, 
  fetchTokenData, 
  fetchTVLData,
  queryKeys,
  type StakingData,
  type PoolData,
  type TokenData,
  type TVLData
} from './api';

// Enterprise-grade error handler
const handleQueryError = (error: Error, queryType: string) => {
  console.error(`Failed to fetch ${queryType} data:`, error);
  // In a real enterprise app, you might want to send this to a logging service
  // like Sentry, DataDog, or your own logging infrastructure
};

// Custom hook for staking data with enterprise features
export const useStakingData = () => {
  const query = useQuery({
    queryKey: queryKeys.stakingData,
    queryFn: fetchStakingData,
    // Fallback data for when query fails (using Decimal strings for serialization)
    placeholderData: {
      totalStaked: '40.5M WEFT',
      activeStakers: '15,234',
      avgStakingTime: '6.2 months',
      governanceProposals: 47,
      stakingAPR: '7.1',
      percentageStaked: '62.5',
      TvlInUsd: '$125M',
    } as StakingData,
    // Enterprise settings
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    // Data considered fresh for 5 minutes
    staleTime: 5 * 60 * 1000,
  });

  // Handle errors in a React Query v5 compatible way
  if (query.error) {
    handleQueryError(query.error, 'staking');
  }

  return query;
};

// Custom hook for pool data with enterprise features
export const usePoolData = () => {
  const query = useQuery({
    queryKey: queryKeys.poolData,
    queryFn: fetchPoolData,
    placeholderData: {
      totalSupplied: '$45.2K',
      totalBorrowed: '$22.1K',
      lendingApr: '3.2%',
      borrowingApr: '5.8%',
      utilizationRate: '48.9%',
    } as PoolData,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000,
  });

  if (query.error) {
    handleQueryError(query.error, 'pool');
  }

  return query;
};

// Custom hook for token data with enterprise features
export const useTokenData = () => {
  const query = useQuery({
    queryKey: queryKeys.tokenData,
    queryFn: fetchTokenData,
    placeholderData: {
      currentPrice: '0.25',
      marketCap: '$25M',
      totalSupply: '100M',
      circulatingSupply: '80M',
      priceChange24h: '5.2',
      totalValueLocked: '$0',
    } as TokenData,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000,
  });

  if (query.error) {
    handleQueryError(query.error, 'token');
  }

  return query;
};

// Custom hook for TVL data with enterprise features
export const useTVLData = () => {
  const query = useQuery({
    queryKey: queryKeys.tvlData,
    queryFn: fetchTVLData,
    placeholderData: {
      currentTvl: '125000000',
      chainTvls: { radix: '125000000' },
      change1d: '15.2',
      change7d: '8.7',
      change1m: '23.4',
    } as TVLData,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000,
  });

  if (query.error) {
    handleQueryError(query.error, 'TVL');
  }

  return query;
};

// Enterprise hook for fetching all data efficiently with parallel queries
export const useWeftData = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: queryKeys.stakingData,
        queryFn: fetchStakingData,
        staleTime: 5 * 60 * 1000,
        retry: 3,
      },
      {
        queryKey: queryKeys.poolData,
        queryFn: fetchPoolData,
        staleTime: 5 * 60 * 1000,
        retry: 3,
      },
      {
        queryKey: queryKeys.tokenData,
        queryFn: fetchTokenData,
        staleTime: 5 * 60 * 1000,
        retry: 3,
      },
      {
        queryKey: queryKeys.tvlData,
        queryFn: fetchTVLData,
        staleTime: 5 * 60 * 1000,
        retry: 3,
      },
    ],
  });

  const [stakingQuery, poolQuery, tokenQuery, tvlQuery] = queries;

  // Calculate overall loading state
  const isLoading = queries.some(query => query.isLoading);
  
  // Calculate if any queries have errors
  const hasError = queries.some(query => query.isError);
  
  // Get all errors
  const errors = queries
    .filter(query => query.isError)
    .map(query => query.error as Error);

  // Refetch all data function
  const refetchAll = () => {
    return Promise.allSettled(queries.map(query => query.refetch()));
  };

  return {
    // Data
    stakingData: stakingQuery.data || null,
    poolData: poolQuery.data || null,
    tokenData: tokenQuery.data || null,
    tvlData: tvlQuery.data || null,
    
    // Loading states
    isLoading,
    isLoadingStaking: stakingQuery.isLoading,
    isLoadingPool: poolQuery.isLoading,
    isLoadingToken: tokenQuery.isLoading,
    isLoadingTVL: tvlQuery.isLoading,
    
    // Error states
    hasError,
    errors,
    stakingError: stakingQuery.error as Error | null,
    poolError: poolQuery.error as Error | null,
    tokenError: tokenQuery.error as Error | null,
    tvlError: tvlQuery.error as Error | null,
    
    // Fetching states (background refetch)
    isFetching: queries.some(query => query.isFetching),
    
    // Success states
    isSuccess: queries.every(query => query.isSuccess),
    
    // Actions
    refetchAll,
    refetchStaking: stakingQuery.refetch,
    refetchPool: poolQuery.refetch,
    refetchToken: tokenQuery.refetch,
    refetchTVL: tvlQuery.refetch,
  };
};

// Backward compatibility aliases for existing components
export const useStakingDataCompat = () => {
  const query = useStakingData();
  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};

export const usePoolDataCompat = () => {
  const query = usePoolData();
  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};

export const useTokenDataCompat = () => {
  const query = useTokenData();
  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};

export const useTVLDataCompat = () => {
  const query = useTVLData();
  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
};
