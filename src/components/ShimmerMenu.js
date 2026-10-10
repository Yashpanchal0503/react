import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 animate-pulse">
      {/* Restaurant Header Banner Skeleton */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex-1 space-y-3 w-full">
          {/* Restaurant Title Skeleton */}
          <div className="h-8 bg-gray-200 rounded-md w-3/4 mx-auto md:mx-0"></div>
          {/* Cuisines Skeleton */}
          <div className="h-4 bg-gray-200 rounded-md w-1/2 mx-auto md:mx-0"></div>
          {/* Area Skeleton */}
          <div className="h-3 bg-gray-200 rounded-md w-1/3 mx-auto md:mx-0"></div>

          {/* Rating & Price Skeleton */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <div className="h-6 w-16 bg-gray-200 rounded-md"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
          </div>
        </div>

        {/* Restaurant Header Image Skeleton */}
        <div className="w-full md:w-48 h-36 bg-gray-200 rounded-xl shrink-0"></div>
      </div>

      {/* Menu Category Title Skeleton */}
      <div className="mb-6 pb-2 border-b border-gray-200">
        <div className="h-6 bg-gray-200 rounded-md w-48"></div>
      </div>

      {/* Menu Items Skeleton List */}
      <div className="divide-y divide-gray-100 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="p-5 flex items-center justify-between gap-4"
            >
              {/* Item Info Skeleton */}
              <div className="flex-1 space-y-2 pr-4">
                <div className="h-5 bg-gray-200 rounded-md w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded-md w-16"></div>
                <div className="h-3 bg-gray-200 rounded-md w-full"></div>
              </div>

              {/* Item Image & Button Skeleton */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-8 w-16 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;