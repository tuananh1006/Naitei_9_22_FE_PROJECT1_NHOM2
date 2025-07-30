"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  hoveredRating?: number;
  onStarClick?: (rating: number) => void;
  onStarHover?: (rating: number) => void;
  onStarLeave?: () => void;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  hoveredRating = 0,
  onStarClick,
  onStarHover,
  onStarLeave,
  className = ""
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  const starSize = sizeClasses[size];
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  const renderStar = (starValue: number, index: number) => {
    const isFilled = starValue <= (hoveredRating || rating);
    
    if (interactive) {
      return (
        <Star
          key={index}
          className={`${starSize} cursor-pointer transition-colors ${
            isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
          onClick={() => onStarClick?.(starValue)}
          onMouseEnter={() => onStarHover?.(starValue)}
          onMouseLeave={onStarLeave}
        />
      );
    }

    // Read-only mode
    return (
      <span
        key={index}
        className={`text-yellow-400 ${starValue <= rating ? '' : 'opacity-30'}`}
      >
        ★
      </span>
    );
  };

  const containerClasses = interactive 
    ? `flex space-x-1 ${className}` 
    : `flex ${className}`;

  return (
    <div className={containerClasses}>
      {stars.map((starValue, index) => renderStar(starValue, index))}
    </div>
  );
}

