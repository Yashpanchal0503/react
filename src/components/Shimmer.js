import React from "react";

const Shimmer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-pulse">
      {/* Search & Filter Buttons Skeleton */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center w-full sm:w-auto gap-2">
          {/* Search Input Skeleton */}
          <div className="h-10 w-full sm:w-80 bg-gray-200 rounded-lg"></div>
          {/* Search Button Skeleton */}
          <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
        </div>
        {/* Top Rated Filter Button Skeleton */}
        <div className="h-10 w-full sm:w-52 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Restaurant Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-xl p-3 border border-gray-100 shadow-sm space-y-3"
            >
              {/* Image Skeleton */}
              <div className="w-full h-44 bg-gray-200 rounded-lg shrink-0"></div>

              {/* Title Skeleton */}
              <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>

              {/* Rating & ETA Skeleton */}
              <div className="flex items-center gap-2">
                <div className="h-4 bg-gray-200 rounded-md w-12"></div>
                <div className="h-4 bg-gray-200 rounded-md w-16"></div>
              </div>

              {/* Cuisine Skeleton */}
              <div className="h-4 bg-gray-200 rounded-md w-full"></div>

              {/* Location Skeleton */}
              <div className="h-3 bg-gray-200 rounded-md w-1/2 pt-2"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;