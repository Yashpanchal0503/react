
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const {resId}=useParams();

    const resInfo = useRestaurantMenu(resId);
    

    if (resInfo === null) {
        return <ShimmerMenu />;
    }

    const {
        name,
        cuisines,
        cloudinaryImageId,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info;
    let {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    if(!itemCards)  itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0].itemCards;
    console.log(itemCards);

    return (
        <div className="menu-container">
            <h1 className="menu-name">{name}</h1>
            <img
                className="menu-image"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    cloudinaryImageId
                }
                alt={name}
            />
            <h2 className="menu-price">{costForTwoMessage}</h2>
            <p className="menu-cuisines">{cuisines?.join(", ")}</p>


            <ul className="menu-list">
                {itemCards.map(item => <li className="menu-item" key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
