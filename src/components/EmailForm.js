import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

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
        <div>
            <h1 style={{ margin: "0rem 0rem 2rem 0rem" }} className={formClass}>
                Email Us:
            </h1>
            <form className="forty-vw" ref={form} onSubmit={sendEmail}>
                <div className={formClass}>
                    <div className="form-item">
                        <label>
                            <h3>Name/Company</h3>
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
                            name="message"
                            style={{ width: "40vw" }}
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
