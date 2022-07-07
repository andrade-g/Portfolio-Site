import "./styles.css"
import React, { useState } from "react";

export default function Contact() {
    const FORM_ENDPOINT = "";

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
        <>
            <div className="">Thank you!</div>
            <div className="">We'll be in touch soon.</div>
        </>
        );
    }

    return(
        <main>
            <h3>Let's work together!</h3>
            <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            // method="POST"
            target="_blank"
            >
            <div className="">
                <input
                type="text"
                placeholder="Your name"
                name="name"
                className=""
                required
                />
            </div>
            <div className="">
                <input
                type="email"
                placeholder="Email"
                name="email"
                className=""
                required
                />
            </div>
            <div className="">
                <textarea
                placeholder="Your message"
                name="message"
                className=""
                required
                />
            </div>
            <div className="">
                <button
                className=""
                type="submit"
                >
                Send a message
                </button>
            </div>
            </form>
        </main>
    );
}