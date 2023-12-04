import React from "react";
import emailPic from "../assets/images/Email.webp";
import callPic from "../assets/images/Call.webp";
import contactPicture from "../assets/images/shutterstock_elderly-call.webp";

const Contact = (props) => {
    return (
        <div style={{ backgroundColor: "#d8eefe" }}>
            <div className="page-margins flex-center-space-around">
                <div
                    className="contact-picture-container"
                    style={{ flexDirection: "column" }}
                >
                    <h1 style={{ margin: "0rem 0rem 2rem 0rem" }}>
                        Contact HydroSpire Inc.
                    </h1>
                    <img
                        className="contact-picture"
                        src={contactPicture}
                        alt="an elderly woman smiling while on the phone"
                    />
                </div>
                <div className="vl"></div>
                <div className="contact-container-container ">
                    <div className="contact-callout">
                        <div>
                            <img src={emailPic} />
                        </div>
                        <a href="mailto: info@hydrospiremedical.com">
                            <h5 className="contact-callout-item">
                                dlawrence@hydrospiremedical.com
                            </h5>
                        </a>
                    </div>
                    <div className="contact-callout">
                        <img src={callPic} />
                        <h5 className="contact-callout-item">(973) 945-7040</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
