import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName,setbtnName]=useState("Login");
    return (
        <div className="container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btn" onClick={()=>{btnName=="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;