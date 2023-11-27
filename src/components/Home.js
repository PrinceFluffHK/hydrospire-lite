import React from "react";
import elder from "../assets/images/shutterstock_elderly-walk.jpeg";

const Home = (props) => {
    return (
        <div>
            <div className="cover-container">
                <img
                    className="cover-photo"
                    src={elder}
                    alt="https://www.shutterstock.com/image-photo/adult-granddaguhter-supporting-her-senior-grandmother-2172757295"
                />
            </div>
            <div className="mission-container">
                <h1 className="our-mission">Our Mission</h1>
                <div className="hl"></div>
                <h3>
                    Create the first approved hydrogen inhalation therapy
                    system*, and improve the lives of the millions of people
                    impacted reperfusion injury caused by stroke and cardiac
                    arrest
                </h3>
                <p>*HydroSpire HITS<sup><sup>TM</sup></sup></p>
                <p>
                    HydroSpire is a research-stage company that currently has no
                    approved products available for human use
                </p>
            </div>
        </div>
    );
};

export default Home;
