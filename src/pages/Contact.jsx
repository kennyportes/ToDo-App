import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div>
                <h2 style={{ textDecoration: "underline" }}>Contact Form</h2>
            </div>
            <div>
                <br />
                <input
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <br />
                <input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <br />
                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <br />
                <textarea
                    name="comments"
                    placeholder="Comments"
                    rows="6"   
                    cols="50"
                    onChange={handleChange}
                />
            </div>
        </>

    );
}

export default Contact;