import React from 'react';
import Image from 'next/image';

interface RadixIconProps {
  className?: string;
  size?: number;
}

export const RadixIcon: React.FC<RadixIconProps> = ({ className = "", size = 24 }) => {
  return (
    <Image
      src="/assets/images/Radix-Icon-50x50.png"
      alt="Radix"
      width={size}
      height={size}
      className={className}
    />
  );
};

interface XRDIconProps {
  className?: string;
  size?: number;
}

export const XRDIcon: React.FC<XRDIconProps> = ({ className = "", size = 24 }) => {
  return (
    <Image
      src="/assets/images/xrd-icon.svg"
      alt="XRD"
      width={size}
      height={size}
      className={className}
    />
  );
};

interface XUSDCIconProps {
  className?: string;
  size?: number;
}

export const XUSDCIcon: React.FC<XUSDCIconProps> = ({ className = "", size = 24 }) => {
  return (
    <Image
      src="/assets/images/xUSDC.png"
      alt="xUSDC"
      width={size}
      height={size}
      className={className}
    />
  );
};

interface WeftyIconProps {
  className?: string;
  size?: number;
}

export const WeftyIcon: React.FC<WeftyIconProps> = ({ className = "", size = 24 }) => {
  return (
    <Image
      src="/assets/images/wefty.png"
      alt="Wefty"
      width={size}
      height={size}
      className={className}
    />
  );
};
