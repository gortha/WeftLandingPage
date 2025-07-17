'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import Web3Background to prevent SSR hydration issues
const Web3Background = dynamic(() => import('@/components/Web3Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
});

export default function ClientWeb3Background() {
  return <Web3Background />;
}
