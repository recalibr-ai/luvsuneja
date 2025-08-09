import { FC } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { ErrorMessageProps } from '../types';

const ErrorMessage: FC<ErrorMessageProps> = ({ 
  message = 'Something went wrong', 
  title,
  onRetry,
  retryText = 'Try Again',
  showIcon = true,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      {showIcon && <AlertCircle className="h-12 w-12 text-red-500 mb-4" />}
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {title || 'Oops! Something went wrong'}
      </h3>
      <p className="text-gray-600 text-center mb-4 max-w-md">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200"
        >
          <RefreshCw className="h-4 w-4" />
          {retryText}
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;