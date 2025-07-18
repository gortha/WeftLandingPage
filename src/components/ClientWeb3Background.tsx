'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Fallback component
const BackgroundFallback = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10" />
);

// Chrome-safe dynamic import with proper error handling
const Web3Background = dynamic(
  () => import('@/components/Web3Background').catch(() => ({ default: BackgroundFallback })),
  {
    ssr: false,
    loading: BackgroundFallback
  }
);

export default function ClientWeb3Background() {
  return (
    <Suspense fallback={<BackgroundFallback />}>
      <Web3Background />
    </Suspense>
  );
}
