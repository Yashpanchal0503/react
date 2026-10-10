import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [reslist, setreslist] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6130146&lng=77.03495029999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // optional chaining
    const datarestaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setrestaurants(datarestaurants || []);
    setreslist(datarestaurants || []);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Looks like you're offline 🔴
        </h1>
        <p className="text-gray-600">
          Please check your internet connection and try again.
        </p>
      </div>
    );
  }

  // conditional rendering
  return reslist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center w-full sm:w-auto gap-2">
          <input
            type="text"
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder:text-gray-400"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 active:scale-95 transition-all shadow-sm"
            onClick={() => {
              const filterRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setreslist(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-200 active:scale-95 transition-all"
          onClick={() => {
            const topRated = restaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setreslist(topRated);
          }}
        >
          Top Rated Restaurants (4.2★+)
        </button>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reslist.map((res) => (
          <Link
            className="block h-full transition-transform hover:-translate-y-1"
            to={"/menu/" + res.info.id}
            key={res.info.id}
          >
            <RestaurantCard resdata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;