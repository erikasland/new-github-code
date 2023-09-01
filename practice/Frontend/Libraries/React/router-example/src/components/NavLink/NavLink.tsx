import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink: any = () => {
    return (
        <nav>
            <div className="nav-link-container">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/photos">PHOTOS</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </nav>
        )
}

export default NavLink;