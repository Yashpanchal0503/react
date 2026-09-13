const RestaurantCard = ({ resdata }) => {
    const { info } = resdata;

    return (
        <div className="card">
            <img
                className="picture"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    info.cloudinaryImageId
                }
                alt="restaurant"
            />

            <h3 className="name">{info.name}</h3>

            <div>
                <span className="rating">
                    ⭐ {info.avgRating}
                </span>
            </div>

            <h4 className="cusine">
                {info.cuisines.join(", ")}
            </h4>

            <h4 className="place">
                {info.areaName}
            </h4>
        </div>
    );
};

export default RestaurantCard;