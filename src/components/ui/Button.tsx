import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'gray';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className = '',
  ...props
}: ButtonProps) {
  // Applies standard flex alignment, Century Gothic font (via font-sans inheritance), and smooth opacity hover states
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-medium transition-opacity duration-200 hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed';

  // Size classes calculation
  let sizeClasses = '';
  if (variant === 'gray') {
    // Gray variant strictly models the square/rectangular structural style like the Search Button
    sizeClasses = {
      sm: 'px-4 h-8 text-sm',
      md: 'px-6 h-11 text-base', // Specifically matches the TopHeader 44px (h-11) input field height perfectly
      lg: 'px-8 h-14 text-lg',
    }[size];
  } else {
    // Standard sizes for typical primary/secondary call-to-action buttons
    sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-2.5 text-base rounded-md',
      lg: 'px-8 py-3.5 text-lg rounded-md',
    }[size];
  }

  // Strictly bound mapped colors according to our semantic brand palette inside globals.css
  const variantClasses = {
    primary: 'bg-accent-secondary text-white',
    secondary: 'bg-accent-blue text-white',
    gray: 'bg-btn-gray text-footer', // Using our footer dark-gray semantic color for dark text contrast
  }[variant];

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {iconLeft && (
        <span className="mr-2 flex items-center justify-center">
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="ml-2 flex items-center justify-center">
          {iconRight}
        </span>
      )}
    </button>
  );
}
