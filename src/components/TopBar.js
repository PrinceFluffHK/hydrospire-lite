import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Hydrospire logo large.jpg";

const TopBar = ({ user }) => {
    const [menuClass, setMenuClass] = useState("invisible");
    const handleMenu = () => {
        console.log("hello from handleMenu");
        if (!menuClass) {
            setMenuClass("invisible");
            console.log("making invisible");
            console.log(menuClass);
        } else {
            setMenuClass("");
            console.log("making visibe");
            console.log(menuClass);
        }
    };

    return (
        <div className="top-bar-container">
            <div className="top-bar">
                <div className="top-bar-left">
                    <Link to="/">
                        <img className="home-page-logo" src={logo} />
                    </Link>
                </div>
                <div className="top-bar-right">
                    <Link to="/" className="top-bar-horizontal">
                        <h3>Home</h3>
                    </Link>
                    <Link to="/iri" className="top-bar-horizontal">
                        <h3>IRI</h3>
                    </Link>
                    <Link to="/team" className="top-bar-horizontal">
                        <h3>Team</h3>
                    </Link>
                    <Link to="/contact" className="top-bar-horizontal">
                        <h3>Contact</h3>
                    </Link>
                    <div className="invisible-when-big" onClick={handleMenu}>CLICK ME</div>
                </div>
            </div>
            <div className={menuClass}>
                <div className="top-bar-bottom">
                    <Link to="/" className="top-bar-vertical" onClick={handleMenu}>
                        <h3>Home</h3>
                    </Link>
                    <Link to="/iri" className="top-bar-vertical" onClick={handleMenu}>
                        <h3>IRI</h3>
                    </Link>
                    <Link to="/team" className="top-bar-vertical" onClick={handleMenu}>
                        <h3>Team</h3>
                    </Link>
                    <Link to="/contact" className="top-bar-vertical" onClick={handleMenu}>
                        <h3>Contact</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
