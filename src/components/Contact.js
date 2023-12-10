import React from "react";
import contactPicture from "../assets/images/shutterstock_elderly-call.webp";
import EmailForm from "./EmailForm";

const Contact = (props) => {
    return (
        <div className="flex justify-space-around align-center contact-container">
            <div className="contact-picture-container">
                <h1 style={{ margin: "0rem 0rem 2rem 0rem" }}>
                    Call Us: (973) 945-7040
                </h1>
                <img
                    className="contact-picture forty-vw"
                    src={contactPicture}
                    alt="an elderly woman smiling while on the phone"
                />
            </div>
            <div className="vl"></div>
            <div className="white-mobile">
                <EmailForm />
            </div>
        </div>
    );
};

export default Contact;
