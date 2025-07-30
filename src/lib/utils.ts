import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Decimal from 'decimal.js';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for Decimal formatting in components
export const formatCurrency = (value: Decimal | number | string | null | undefined): string => {
  if (value === null || value === undefined) return '$0';
  
  let decimal: Decimal;
  try {
    decimal = value instanceof Decimal ? value : new Decimal(value);
  } catch {
    return '$0';
  }
  
  if (decimal.gte(1e9)) return `$${decimal.div(1e9).toFixed(1)}B`;
  if (decimal.gte(1e6)) return `$${decimal.div(1e6).toFixed(1)}M`;
  if (decimal.gte(1e3)) return `$${decimal.div(1e3).toFixed(1)}K`;
  return `$${decimal.toFixed(0)}`;
};

export const formatNumber = (value: Decimal | number | string | null | undefined): string => {
  if (value === null || value === undefined) return '0';
  
  let decimal: Decimal;
  try {
    decimal = value instanceof Decimal ? value : new Decimal(value);
  } catch {
    return '0';
  }
  
  if (decimal.gte(1e9)) return `${decimal.div(1e9).toFixed(1)}B`;
  if (decimal.gte(1e6)) return `${decimal.div(1e6).toFixed(1)}M`;
  if (decimal.gte(1e3)) return `${decimal.div(1e3).toFixed(1)}K`;
  return decimal.toString();
};

export const formatPercentage = (value: Decimal | number | string | null | undefined, decimals: number = 2): string => {
  if (value === null || value === undefined) return '0%';
  
  let decimal: Decimal;
  try {
    decimal = value instanceof Decimal ? value : new Decimal(value);
  } catch {
    return '0%';
  }
  
  return `${decimal.toFixed(decimals)}%`;
};

export const formatDecimal = (value: Decimal | number | string | null | undefined, decimals: number = 2): string => {
  if (value === null || value === undefined) return '0';
  
  let decimal: Decimal;
  try {
    decimal = value instanceof Decimal ? value : new Decimal(value);
  } catch {
    return '0';
  }
  
  return decimal.toFixed(decimals);
};

export const isPositive = (value: Decimal | number | string | null | undefined): boolean => {
  if (value === null || value === undefined) return false;
  
  try {
    const decimal = value instanceof Decimal ? value : new Decimal(value);
    return decimal.gt(0);
  } catch {
    return false;
  }
};

export const isNegative = (value: Decimal | number | string | null | undefined): boolean => {
  if (value === null || value === undefined) return false;
  
  try {
    const decimal = value instanceof Decimal ? value : new Decimal(value);
    return decimal.lt(0);
  } catch {
    return false;
  }
};

export const isZero = (value: Decimal | number | string | null | undefined): boolean => {
  if (value === null || value === undefined) return true;
  
  try {
    const decimal = value instanceof Decimal ? value : new Decimal(value);
    return decimal.eq(0);
  } catch {
    return true;
  }
};
