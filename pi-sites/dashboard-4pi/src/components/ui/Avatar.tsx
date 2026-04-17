import { useState } from 'react';

interface AvatarProps {
  src?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
};

export function Avatar({ src, fallback, size = 'md', className = '' }: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full overflow-hidden
        bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200
        font-medium shrink-0
        ${sizeClasses[size]} ${className}`}
      title={fallback}
    >
      {showImage ? (
        <img
          src={src}
          alt={fallback}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}
