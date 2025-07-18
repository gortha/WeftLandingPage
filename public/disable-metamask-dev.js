// Disable MetaMask injection in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // Override ethereum provider to prevent MetaMask injection errors
  Object.defineProperty(window, 'ethereum', {
    value: undefined,
    writable: false,
    configurable: false
  });
  
  // Prevent Web3 provider errors
  if (!window.web3) {
    window.web3 = undefined;
  }
}
