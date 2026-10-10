import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating, areaName } =
    resInfo?.cards[2]?.card?.card?.info || {};

  let itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  if (!itemCards) {
    itemCards =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        ?.categories?.[0]?.itemCards;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Restaurant Header Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900">{name}</h1>
          <p className="text-gray-500 font-medium text-sm">
            {cuisines?.join(", ")}
          </p>
          <p className="text-gray-400 text-xs">{areaName}</p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <span className="inline-flex items-center gap-1 bg-green-700 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
              <span>★</span> {avgRating || "--"}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-700 font-semibold text-sm">
              {costForTwoMessage}
            </span>
          </div>
        </div>

        {cloudinaryImageId && (
          <div className="w-full md:w-48 h-36 rounded-xl overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                cloudinaryImageId
              }
              alt={name}
            />
          </div>
        )}
      </div>

      {/* Menu Header */}
      <div className="mb-6 pb-2 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">
          Recommended Items ({itemCards?.length || 0})
        </h2>
      </div>

      {/* Menu List */}
      <ul className="divide-y divide-gray-100 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {itemCards?.map((item) => {
          const info = item?.card?.info;
          const price = (info?.price || info?.defaultPrice) / 100;

          return (
            <li
              key={info?.id}
              className="p-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-gray-800 text-base mb-1">
                  {info?.name}
                </h3>
                <span className="text-amber-600 font-bold text-sm">
                  ₹{price}
                </span>
                {info?.description && (
                  <p className="text-gray-400 text-xs line-clamp-2 mt-1">
                    {info?.description}
                  </p>
                )}
              </div>

              {/* Optional Item Image & Add Button */}
              <div className="relative flex flex-col items-center">
                {info?.imageId ? (
                  <img
                    className="w-24 h-24 object-cover rounded-lg border border-gray-100"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/" +
                      info?.imageId
                    }
                    alt={info?.name}
                  />
                ) : null}
                <button className="px-4 py-1.5 bg-white text-emerald-600 border border-gray-300 rounded-lg text-xs font-bold hover:bg-emerald-50 shadow-sm transition-all mt-1">
                  ADD
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;