import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const EmailForm = () => {
    const form = useRef();
    const [deliveredClass, setDeliveredClass] = useState("invisible");
    const [undeliveredClass, setUndeliveredClass] = useState("invisible");
    const [formClass, setFormClass] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6eickyn",
                "template_lzlrfz9",
                form.current,
                "Wr5DCHfNWTysQ9iLO"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDeliveredClass("");
                    setFormClass("invisible");
                },
                (error) => {
                    console.log(error.text);
                    setUndeliveredClass("");
                }
            );
    };

    return (
        <div
            style={{
                padding: "0rem 0rem 1rem 0rem",
            }}
        >
            <div className="invisible-when-small flex align-center justify-center">
                <h1>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#0073aa", marginRight: ".5rem" }}
                    />
                    :
                </h1>
                <h3
                    className={formClass}
                    style={{marginLeft: ".5rem"}}
                >
                    dlawrence@hydrospiremedical.com
                </h3>
            </div>
            <div className="invisible-when-big">
                <div className=" flex justify-space-between align-center">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2xl"
                        style={{ color: "#0073aa" }}
                    />
                    <h1>-</h1>
                    <h4>dlawrence@hydrospiremedical.com</h4>
                </div>
            </div>
            <form className="forty-vw" ref={form} onSubmit={sendEmail}>
                <div className={formClass}>
                    <div className="form-item">
                        <label>
                            <h3>Name/Organization</h3>
                        </label>
                        <input type="text" name="user_name" id="name" />
                    </div>
                    <div className="form-item">
                        <label>
                            <h3>Email Address</h3>
                        </label>
                        <input type="email" name="user_email" />
                    </div>
                    <div>
                        <label>
                            <h3>Message</h3>
                        </label>
                        <textarea
                            className="message"
                            name="message"
                            rows={10}
                        />
                    </div>
                    <input type="submit" value="Send" />
                </div>
                <h1
                    style={{ color: "green", textAlign: "center" }}
                    className={deliveredClass}
                >
                    Thanks for the message! We will respond at our earliest
                    convenience.
                </h1>
                <h1 style={{ color: "red" }} className={undeliveredClass}>
                    Error
                </h1>
            </form>
        </div>
    );
};

export default EmailForm;
