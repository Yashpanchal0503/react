import React, { lazy ,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";



const Grocery = lazy(()=>import("./components/Grocery"))


// destructring on the fly
// const RestaurantCard = ({resName,resImage,resRating,resTime,rescusine,resPlace}) 
// config driven ui
// key - index as a key 
// props is just a js object 


const App = ()=>{
    const [userName,setUserName]=useState("");
    
    useEffect(()=>{
        setUserName("Yash Panchal");
    },[])
    return (
        <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
            <div>
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
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
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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