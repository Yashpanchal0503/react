import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

// destructring on the fly
// const RestaurantCard = ({resName,resImage,resRating,resTime,rescusine,resPlace}) 
// config driven ui
// key - index as a key 
// props is just a js object 
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