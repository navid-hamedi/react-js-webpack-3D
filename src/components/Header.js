import React from "react";
import logo from '../assets/img-logo/brand.svg';

function Header () {
    return (
        <div className="header">
            <img src={logo}></img>
        </div>
    );
}

export default Header;