import { useState } from "react";
import MenuItems from "./MenuItems";

const RestaurantCategory = ({ Category,showItems,setShowIndex }) => {
    
    const { title, itemCards } = Category.card.card;

    return  (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <button
                className="w-full flex items-center justify-between px-5 py-5 text-left hover:bg-orange-50/50 transition-colors"
                onClick={() => setShowIndex()}
            >
                <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-gray-800">
                        {title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">
                        {itemCards?.length || 0} items
                    </p>
                </div>

                <span
                    className={`flex items-center justify-center w-9 h-9 rounded-full bg-orange-50 text-orange-600 transition-transform duration-300 ${
                        showItems  ? "" : "rotate-180"
                    }`}
                >
                    ▼
                </span>
            </button>

            {showItems  && (
                <div className="px-3 sm:px-5 pb-4">
                    <MenuItems itemCards={itemCards} />
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;