// API service functions for TanStack Query
// These functions handle all the API calls and data transformation

import Decimal from 'decimal.js';
import { formatCurrency, formatPercentage } from './utils';

// Configure Decimal.js for precision
Decimal.config({
    precision: 20,
    rounding: Decimal.ROUND_HALF_UP,
    toExpNeg: -7,
    toExpPos: 21,
});

// Types for API responses
export interface StakingApiResponse {
    staked?: string | number;
    tvl_xrd?: number;
    tvl_usd?: number;
    apr?: number;
    total_stakers?: number;
    avg_staking_duration?: number;
    governance_proposals?: number;
    total_supply?: number;
}

export interface StakingData {
    totalStaked: string;
    stakingAPR: string; // Changed from Decimal to string for serialization
    TvlInUsd: string;
    activeStakers: string;
    avgStakingTime: string;
    governanceProposals: number;
    percentageStaked: string; // Changed from Decimal to string for serialization
}


export interface PoolApiResponse {
    totalDeposit?: string;
    totalLoan?: string;
    borrowingApr?: number;
    rawLendingApr?: number; // Added for raw lending APR
    resourceAddress?: string; // Added for token identification
}

export interface AstrolescentTokenPrice {
    address: string;
    symbol: string;
    name: string;
    tokenPriceXRD: number;
    tokenPriceUSD: number;
}

export interface AstrolescentApiResponse {
    [resourceAddress: string]: AstrolescentTokenPrice;
}

export interface PoolData {
    totalSupplied: string;
    totalBorrowed: string;
    utilizationRate: string; // Changed from Decimal to string for serialization
    lendingApr: string; // Changed from Decimal to string for serialization
    borrowingApr: string; // Changed from Decimal to string for serialization
}

export interface CoinGeckoResponse {
    market_data: {
        current_price: {
            usd: number,
        },
        price_change_24h: number,
        total_value_locked: {
            usd: number,
        },
        market_cap: {
            usd: number
        },
    },
}

export interface TokenData {
    currentPrice: string; // Changed from Decimal to string for serialization
    marketCap: string;
    totalSupply: string;
    circulatingSupply: string;
    totalValueLocked: string;
    priceChange24h: string; // Changed from Decimal to string for serialization
}

export interface DeFiLlamaResponse {
    tvl?: [{
        date: number;
        totalLiquidityUSD: number;
    }];
}

export interface TVLData {
    currentTvl: string;
    tvlChange24h: Decimal;
}

// Utility functions for data formatting with Decimal.js
const formatNumber = (value: Decimal | number): string => {
    const decimal = value instanceof Decimal ? value : new Decimal(value);
    if (decimal.gte(1e9)) return `${decimal.div(1e9).toFixed(1)}B`;
    if (decimal.gte(1e6)) return `${decimal.div(1e6).toFixed(1)}M`;
    if (decimal.gte(1e3)) return `${decimal.div(1e3).toFixed(1)}K`;
    return decimal.toFixed(0);
};

const formatTokenAmount = (value: Decimal | number, symbol: string = ''): string => {
    const decimal = value instanceof Decimal ? value : new Decimal(value);
    if (decimal.gte(1e9)) return `${decimal.div(1e9).toFixed(1)}B ${symbol}`.trim();
    if (decimal.gte(1e6)) return `${decimal.div(1e6).toFixed(1)}M ${symbol}`.trim();
    if (decimal.gte(1e3)) return `${decimal.div(1e3).toFixed(1)}K ${symbol}`.trim();
    return `${decimal.toFixed(0)} ${symbol}`.trim();
};

// API Functions

// Fetch token prices from Astrolescent API
export const fetchTokenPrices = async (): Promise<AstrolescentApiResponse> => {
    try {
        const response = await fetch('https://api.astrolescent.com/partner/R96v1uADor/prices', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error(`Astrolescent API error: ${response.status}`);
        }

        const data: AstrolescentApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching token prices:', error);
        // Return empty object as fallback
        return {};
    }
};

export const fetchStakingData = async (): Promise<StakingData> => {
    try {
        const response = await fetch('https://api.weft.finance/staking', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error(`Staking API error: ${response.status}`);
        }

        const data: StakingApiResponse = await response.json();

        // Calculate values with Decimal for precision    
        const totalStaked = new Decimal(data.staked || 40_300_000);
        const apr = new Decimal(data.apr || 0.0952).mul(100); // Convert to percentage
        const tvlUsd = new Decimal(data.tvl_usd || 70_100);
        const totalSupply = new Decimal(data.total_supply || 100_000_000);
        const percentageStaked = totalStaked.div(totalSupply).mul(100);

        return {
            totalStaked: formatTokenAmount(totalStaked, 'WEFT'),
            stakingAPR: formatPercentage(apr),
            TvlInUsd: formatCurrency(tvlUsd),
            activeStakers: formatNumber(data.total_stakers || 15_234),
            avgStakingTime: `~${(data.avg_staking_duration || 6.2).toFixed(1)} months`,
            governanceProposals: data.governance_proposals || 47,
            percentageStaked: formatPercentage(percentageStaked),
        };
    } catch (error) {
        console.error('Error fetching staking data:', error);
        // Return fallback data as strings
        return {
            totalStaked: '100M WEFT',
            stakingAPR: '9.52',
            TvlInUsd: '$70.1K',
            activeStakers: '0',
            avgStakingTime: '~6.2 months',
            governanceProposals: 47,
            percentageStaked: '40.3',
        };
    }
};

export const fetchPoolData = async (): Promise<PoolData> => {
    try {
        // Fetch both pool data and token prices in parallel
        const [poolResponse, pricesData] = await Promise.all([
            fetch('https://api.weft.finance/pool', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
            }),
            fetchTokenPrices()
        ]);

        if (!poolResponse.ok) {
            throw new Error(`Pool API error: ${poolResponse.status}`);
        }

        const rawData = await poolResponse.json();

        // Handle both array and single object responses
        let data: PoolApiResponse[];
        if (Array.isArray(rawData)) {
            data = rawData;
        } else {
            // If it's a single object, wrap it in an array
            data = [rawData];
        }

        // Calculate values with Decimal for precision, converting to USD using prices
        const totalSupplied = data.reduce((sum, pool) => {
            const depositAmount = pool.totalDeposit ? new Decimal(pool.totalDeposit) : new Decimal(0);
            
            // Get USD price for this resource address
            const tokenPrice = pool.resourceAddress && pricesData[pool.resourceAddress] 
                ? new Decimal(pricesData[pool.resourceAddress].tokenPriceUSD)
                : new Decimal(0);
            
            const usdValue = depositAmount.mul(tokenPrice);
            return sum.add(usdValue);
        }, new Decimal(0));

        const totalBorrowed = data.reduce((sum, pool) => {
            const loanAmount = pool.totalLoan ? new Decimal(pool.totalLoan) : new Decimal(0);
            
            // Get USD price for this resource address
            const tokenPrice = pool.resourceAddress && pricesData[pool.resourceAddress] 
                ? new Decimal(pricesData[pool.resourceAddress].tokenPriceUSD)
                : new Decimal(0);
            
            const usdValue = loanAmount.mul(tokenPrice);
            return sum.add(usdValue);
        }, new Decimal(0));

        const utilizationRate = totalSupplied.gt(0) ? totalBorrowed.div(totalSupplied) : new Decimal(0);
        const lendingApr = Math.max(...data.map(pool => (pool.rawLendingApr || 0) * 100));
        const borrowingApr = Math.max(...data.map(pool => (pool.borrowingApr || 0) * 100));

        return {
            totalSupplied: formatCurrency(totalSupplied),
            totalBorrowed: formatCurrency(totalBorrowed),
            utilizationRate: formatPercentage(utilizationRate),
            lendingApr: formatPercentage(lendingApr),
            borrowingApr: formatPercentage(borrowingApr),
        };
    } catch (error) {
        console.error('Error fetching pool data:', error);
        // Return fallback data as strings
        return {
            totalSupplied: '$58.2M',
            totalBorrowed: '$42.4M',
            utilizationRate: '0.727',
            lendingApr: '8.5%',
            borrowingApr: '3%',
        };
    }
};

export const fetchTokenData = async (): Promise<TokenData> => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/weft-finance', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error(`CoinGecko API error: ${response.status}`);
        }

        const data: CoinGeckoResponse = await response.json();

        // Calculate values with Decimal for precision
        const currentPrice = new Decimal(data?.market_data?.current_price?.usd || 0);
        const marketCap = new Decimal(data?.market_data?.market_cap?.usd || 0);
        const priceChange24h = new Decimal(data?.market_data?.price_change_24h || 0);

        return {
            currentPrice: currentPrice.toString(),
            marketCap: formatCurrency(marketCap),
            totalSupply: '100.0M',
            circulatingSupply: '70.0M+',
            totalValueLocked: formatCurrency(data?.market_data?.total_value_locked?.usd || 0),
            priceChange24h: priceChange24h.toString(),
        };
    } catch (error) {
        console.error('Error fetching token data:', error);
        // Return fallback data as strings
        return {
            currentPrice: '0.0012408',
            marketCap: '$25.0M',
            totalSupply: '100.0M',
            circulatingSupply: '80.0M',
            totalValueLocked: '$0',
            priceChange24h: '-66.28',
        };
    }
};

export const fetchTVLData = async (): Promise<TVLData> => {
    try {
        const response = await fetch('https://api.llama.fi/protocol/weft-finance', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error(`DeFiLlama API error: ${response.status}`);
        }

        const data: DeFiLlamaResponse = await response.json();

        const currentTvl = new Decimal(data.tvl?.at(data.tvl.length - 1)?.totalLiquidityUSD || 125_000_000);
        const yesterdayTvl = new Decimal(data.tvl?.at(data.tvl.length - 2)?.totalLiquidityUSD || 125_000_000);

        return {
            currentTvl: currentTvl.toString(),
            tvlChange24h: currentTvl.sub(yesterdayTvl).div(yesterdayTvl).mul(100),
        };
    } catch (error) {
        console.error('Error fetching TVL data:', error);
        // Return fallback data as strings
        return {
            currentTvl: '125000000',
            tvlChange24h: new Decimal!(0)
        };
    }
};

export const queryKeys = {
    stakingData: ['staking-data'] as const,
    poolData: ['pool-data'] as const,
    tokenData: ['token-data'] as const,
    tvlData: ['tvl-data'] as const,
} as const;
