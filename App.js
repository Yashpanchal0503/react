import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="container">
            <div className="logo-container">
                <img className="logo" src="https://th.bing.com/th/id/OIP.UdUO9FVwvlkAStde0ZLYcQHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3"/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};



// we can also write as this 
// destructring on the fly
// config driven ui
// const RestaurantCard = ({resName,resImage,resRating,resTime,rescusine,resPlace}) 
const RestaurantCard = (props) => {
    // props is just a js object 
    const {resdata}=props;
    const {resName,resImage,resRating,resTime,rescusine,resPlace}=resdata;
    return (
        <div className="card">
            <img className="picture" src={resImage} alt="restaurant"/>
            <h3 className="name">{resName}</h3>
            <div>
                <span className="rating">⭐ {resRating}</span>
                <span className="time">• {resTime} mins</span>
            </div>
            <h4 className="cusine">{rescusine}</h4>
            <h4 className="place">{resPlace}</h4>
        </div>
    );
};

const reslist = [
    {
        id: 1,
        resName: "Meghna Foods",
        resImage: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
        resRating: 4.4,
        resTime: 38,
        rescusine: "North Indian, South Indian, Asian",
        resPlace: "Old Rajendra Nagar"
    },
    {
        id: 2,
        resName: "Burger Singh",
        resImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        resRating: 4.2,
        resTime: 25,
        rescusine: "Burgers, Fast Food",
        resPlace: "Rajouri Garden"
    },
    {
        id: 3,
        resName: "Biryani Blues",
        resImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
        resRating: 4.5,
        resTime: 30,
        rescusine: "Biryani, Mughlai",
        resPlace: "Connaught Place"
    },
    {
        id: 4,
        resName: "Domino's Pizza",
        resImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        resRating: 4.3,
        resTime: 28,
        rescusine: "Pizza, Italian, Fast Food",
        resPlace: "Dwarka"
    },
    {
        id: 5,
        resName: "Haldiram's",
        resImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        resRating: 4.1,
        resTime: 35,
        rescusine: "North Indian, Sweets, Snacks",
        resPlace: "Karol Bagh"
    },
    {
        id: 6,
        resName: "Wow! Momo",
        resImage: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800",
        resRating: 4.0,
        resTime: 22,
        rescusine: "Momos, Chinese, Fast Food",
        resPlace: "Saket"
    },
    {
        id: 7,
        resName: "Burger King",
        resImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
        resRating: 4.2,
        resTime: 27,
        rescusine: "Burgers, American, Fast Food",
        resPlace: "Janakpuri"
    },
    {
        id: 8,
        resName: "Sagar Ratna",
        resImage: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
        resRating: 4.4,
        resTime: 32,
        rescusine: "South Indian, North Indian",
        resPlace: "Lajpat Nagar"
    }
];

const Body =()=>{
    return (
        <div>
            <div className="search">
                <input className="res-search" placeholder="search for RestaurantCard"/>
            </div>
            <div className="restaurent-card">
               {reslist.map((res) => (
                <RestaurantCard key ={res.id} resdata= {res}/>
                ))}

            </div>
        </div>
    );
};

const App = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);