import { FC } from 'react';
import { LoadingSpinnerProps } from '../types';

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '', 
  color,
  text
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const borderColor = color 
    ? `border-2 border-gray-300 border-t-${color}`
    : 'border-2 border-gray-300 border-t-black';

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full ${borderColor} ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;