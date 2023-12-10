import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Hydrospire logo large.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const TopBar = ({ user }) => {
    const [menuClass, setMenuClass] = useState("invisible");
    const handleMenu = () => {
        if (!menuClass) {
            setMenuClass("invisible");
        } else {
            setMenuClass("");
        }
    };

    const MenuIcon = () => {
        if (menuClass) {
            return (
                <div className="invisible-when-big top-bar-icon" onClick={handleMenu}>
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ color: "#0073aa" }}
                        size="2xl"
                    />
                </div>
            );
        }
        return (
            <div className="invisible-when-big top-bar-icon" onClick={handleMenu} >
                <FontAwesomeIcon
                    icon={faX}
                    size="2xl"
                    style={{ color: "#0073aa" }}
                />
            </div>
        );
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
                        <h3>Contact Us</h3>
                    </Link>
                    <MenuIcon />
                </div>
            </div>
            <div className={menuClass}>
                <div className="top-bar-bottom">
                    <Link
                        to="/"
                        className="top-bar-vertical"
                        onClick={handleMenu}
                    >
                        <h3>Home</h3>
                    </Link>
                    <Link
                        to="/iri"
                        className="top-bar-vertical"
                        onClick={handleMenu}
                    >
                        <h3>IRI</h3>
                    </Link>
                    <Link
                        to="/team"
                        className="top-bar-vertical"
                        onClick={handleMenu}
                    >
                        <h3>Team</h3>
                    </Link>
                    <Link
                        to="/contact"
                        className="top-bar-vertical"
                        onClick={handleMenu}
                    >
                        <h3>Contact</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
