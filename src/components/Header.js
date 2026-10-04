import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName,setbtnName]=useState("Login");
    return (
        <div className="container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <ul>
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