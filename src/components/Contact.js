import React from "react";
import contactPicture from "../assets/images/shutterstock_elderly-call.webp";
import EmailForm from "./EmailForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
    return (
        <div>
            <div id="desktop" className="invisible-when-small">
                <div className="flex justify-space-around align-center contact-container">
                    <div className="contact-picture-container">
                        <h1 style={{ margin: "0rem 0rem 2rem 0rem" }}>
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={{
                                    color: "#0073aa",
                                    marginRight: ".5rem",
                                }}
                            />
                            : (973) 945-7040
                        </h1>
                        <img
                            className="contact-picture forty-vw"
                            src={contactPicture}
                            alt="an elderly woman smiling while on the phone"
                        />
                    </div>
                    <div className="vl"></div>
                    <EmailForm />
                </div>
            </div>
            <div id="mobile" className="invisible-when-big">
                <div className="contact-container">
                    <div className="flex justify-center">
                        <h1 style={{ marginTop: "0rem", paddingTop: "1rem" }}>
                            Contact Us
                        </h1>
                    </div>
                    <div
                        className="flex justify-center"
                        style={{ padding: ".5rem 0rem .5rem 0rem" }}
                    >
                        <img
                            className="contact-picture"
                            src={contactPicture}
                            alt="an elderly woman smiling while on the phone"
                        />
                    </div>
                    <div className="flex justify-space-between align-center mobile-padding">
                        <FontAwesomeIcon
                            icon={faPhone}
                            size="2xl"
                            style={{ color: "#0073aa" }}
                        />
                        <h1>-</h1>
                        <h1>(973) 945-7040</h1>
                    </div>
                    <div className="mobile-padding" style={{ height: "500px" }}>
                        <EmailForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
