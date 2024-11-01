import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'success' | 'info';
  className?: string;
  fullWidth?: boolean;
}

const variantStyles = {
  primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
  success: 'bg-green-100 hover:bg-green-200 text-green-700',
  info: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700',
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  fullWidth = false,
}) => {
  const baseStyles = 'font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};