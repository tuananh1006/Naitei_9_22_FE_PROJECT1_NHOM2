import React from 'react';
// Skeleton component for fallback images
export function ImageSkeleton({ className = "" }: { className?: string }) {
    return (
        <div className={`bg-gray-100 animate-pulse flex items-center justify-center ${className}`}>
        <svg
            className="w-8 h-8 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
            />
                 </svg>
     </div>
    );
}


