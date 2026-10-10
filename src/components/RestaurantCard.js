const RestaurantCard = ({ resdata }) => {
  const { info } = resdata;

  return (
    <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-3">
      {/* Image Container with fixed aspect ratio */}
      <div className="relative w-full h-44 overflow-hidden rounded-lg mb-3">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            info.cloudinaryImageId
          }
          alt={info.name}
        />
      </div>

      {/* Details Container */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Restaurant Name */}
          <h3 className="font-bold text-gray-800 text-lg truncate mb-1" title={info.name}>
            {info.name}
          </h3>

          {/* Rating and Delivery Time info */}
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded">
              <span>★</span> {info.avgRating || "--"}
            </span>
            <span className="text-gray-500 text-xs font-medium">•</span>
            <span className="text-gray-600 text-xs font-semibold">
              {info.sla?.slaString || "30-40 mins"}
            </span>
          </div>

          {/* Cuisines (Truncated to 1 line) */}
          <p className="text-gray-500 text-sm truncate mb-1" title={info.cuisines?.join(", ")}>
            {info.cuisines?.join(", ")}
          </p>
        </div>

        {/* Location */}
        <p className="text-gray-400 text-xs font-medium truncate mt-2 pt-2 border-t border-gray-100">
          {info.areaName}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;