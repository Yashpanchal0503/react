
const MenuItems = ({ itemCards }) => {
    return (
        <ul className="divide-y divide-dashed divide-gray-200">
            {itemCards?.map((item) => {
                const info = item?.card?.info;

                if (!info) {
                    return null;
                }

                const itemPrice = info.price ?? info.defaultPrice;
                const price =
                    itemPrice != null ? itemPrice / 100 : null;

                return (
                    <li
                        key={info.id}
                        className="py-5 flex items-start justify-between gap-4"
                    >
                        <div className="flex-1 min-w-0 pt-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span
                                    className={`w-4 h-4 border-2 flex items-center justify-center rounded-sm shrink-0 ${
                                        info.itemAttribute?.vegClassifier === "VEG"
                                            ? "border-green-600"
                                            : "border-red-600"
                                    }`}
                                >
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full ${
                                            info.itemAttribute?.vegClassifier === "VEG"
                                                ? "bg-green-600"
                                                : "bg-red-600"
                                        }`}
                                    />
                                </span>

                                {info.ribbon?.text && (
                                    <span className="text-xs font-bold text-orange-600">
                                        {info.ribbon.text}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-base font-bold text-gray-800 leading-snug">
                                {info.name}
                            </h3>

                            <p className="text-sm font-semibold text-gray-800 mt-2">
                                {price !== null ? `₹${price}` : "Price unavailable"}
                            </p>

                            {info.ratings?.aggregatedRating?.rating && (
                                <p className="text-xs text-green-700 font-semibold mt-2">
                                    ★ {info.ratings.aggregatedRating.rating}
                                    {info.ratings.aggregatedRating.ratingCountV2 && (
                                        <span className="text-gray-400 font-normal">
                                            {" "}({info.ratings.aggregatedRating.ratingCountV2})
                                        </span>
                                    )}
                                </p>
                            )}

                            {info.description && (
                                <p className="text-sm text-gray-500 leading-relaxed mt-2 line-clamp-3">
                                    {info.description}
                                </p>
                            )}
                        </div>

                        <div className="relative w-28 sm:w-32 shrink-0">
                            {info.imageId ? (
                                <img
                                    className="w-28 sm:w-32 h-24 sm:h-28 object-cover rounded-xl"
                                    src={
                                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                        info.imageId
                                    }
                                    alt={info.name}
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-28 sm:w-32 h-24 sm:h-28 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                                    No image
                                </div>
                            )}

                            <button
                                disabled={price === null}
                                className="absolute -bottom-3 left-1/2 -translate-x-1/2 min-w-24 px-5 py-2 bg-white text-green-700 border border-gray-200 rounded-lg font-extrabold text-sm shadow-md hover:bg-green-50 hover:border-green-600 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                ADD
                            </button>

                            <p className="text-[9px] text-gray-400 text-center mt-5">
                                {price !== null ? "CUSTOMISABLE" : ""}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default MenuItems;
