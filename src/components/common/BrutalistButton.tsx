// components/common/BrutalistButton.tsx
'use client';

import { ReactNode } from 'react';

interface BrutalistButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrutalistButton = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: BrutalistButtonProps) => {
  const baseClasses = "font-black uppercase border-4 border-black transform transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    primary: "bg-orange-500 text-white hover:translate-x-1 hover:translate-y-1",
    secondary: "bg-lime-400 text-black hover:translate-x-1 hover:translate-y-1", 
    accent: "bg-pink-500 text-white hover:translate-x-1 hover:translate-y-1"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
