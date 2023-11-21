import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Hydrospire logo large.jpg";

const TopBar = ({ user }) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <Link to="/">
                        <img
                            className="home-page-logo"
                            src={logo}
                            style={{ height: "4rem" }}
                        />
                    </Link>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <Link to="/">
                            <h5>Home</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/iri">
                            <h5>IRI</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/team">
                            <h5>Team</h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <h5>Contact</h5>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopBar;
