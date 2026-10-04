import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// destructring on the fly
// const RestaurantCard = ({resName,resImage,resRating,resTime,rescusine,resPlace}) 
// config driven ui
// key - index as a key 
// props is just a js object 
const App = ()=>{
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/menu/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);