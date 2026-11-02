
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [ShowIndex, setShowIndex] = useState(0);

    if (resInfo === null || resInfo === undefined) {
        return <ShimmerMenu />;
    }

    const {
        name,
        cuisines,
        cloudinaryImageId,
        costForTwoMessage,
        avgRating,
        areaName
    } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const Categories =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

                <div className="mb-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 mb-2">
                        Restaurant
                    </p>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        {name}
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        {cuisines?.join(", ")}
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="inline-flex items-center gap-1 bg-green-700 text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                                    ★ {avgRating || "--"}
                                </span>

                                <span className="text-gray-300">|</span>

                                <span className="text-sm font-semibold text-gray-700">
                                    {costForTwoMessage}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 flex items-center gap-2">
                                <span className="text-orange-500">●</span>
                                {areaName}
                            </p>
                        </div>

                        {cloudinaryImageId && (
                            <img
                                className="w-full sm:w-36 h-36 object-cover rounded-xl"
                                src={
                                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                    cloudinaryImageId
                                }
                                alt={name}
                            />
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Menu
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Explore the dishes and find your favourites.
                    </p>
                </div>

                <div className="space-y-4">
                    {Categories
                        ?.filter((Category) => {
                            return (
                                Category?.card?.card?.["@type"] ===
                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                            );
                        })
                        .map((Category,Index) => (
                            <RestaurantCategory
                                key={Category.card.card.title}
                                Category={Category}
                                showItems ={Index===ShowIndex?true:false}
                                setShowIndex={()=>{ShowIndex===Index? setShowIndex(null): setShowIndex(Index)}}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
