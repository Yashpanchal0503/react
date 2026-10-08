import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setbtnName]=useState("Login");
    const onlineStatus = useOnlineStatus();
    // console.log(onlineStatus);
    
    return (
        <div className="container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li className="li">Online Status:{onlineStatus===false?"🔴":"🟢"}</li>
                    <Link className="li" to="/grocery">Grocery</Link>
                    <Link className="li" to="/">Home</Link>
                    <Link className="li" to="/about">About Us</Link>
                    <Link className="li" to="/contact">Contact Us</Link>
                    <li className="li">Cart</li>
                    <button className="btn" onClick={()=>{btnName=="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;