import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [reslist, setreslist] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const [searchText, setsearchText]= useState("");
    const [restaurants, setrestaurants] = useState([]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6130146&lng=77.03495029999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // optional chaining 
        const datarestaurants =
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setrestaurants(datarestaurants);

        setreslist(datarestaurants);
    };
    // conditional rendering
    return reslist.length==0? (<Shimmer/>) : (
        <div>
            <div className="search">
                <input
                    className="res-search"
                    placeholder="search for RestaurantCard"
                    value = {searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                />
                <button
                    className="top-btn"
                    onClick={()=>{
                        
                        const filterRestaurants = restaurants.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setreslist(filterRestaurants);
                    }}

                >
                    search
                </button>
                <button
                    className="top-btn"
                    onClick={() => {
                        setreslist(
                            reslist.filter(
                                (res) => res.info.avgRating > 4.2
                            )
                        );
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="restaurent-card">
                {reslist.map((res) => (
                    <RestaurantCard
                        key={res.info.id}
                        resdata={res}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;