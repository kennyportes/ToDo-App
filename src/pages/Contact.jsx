import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log("Form Data:", form);
        alert(`Message sent by ${form.firstName}!`);
    }
    return (
        <>
            <div>
                <h2 style={{ textDecoration: "underline" }}>Contact Form</h2>

                <form onSubmit={handleSubmit}>
                <div className="w-25 mx-auto">
                    <br />
                    <input
                        className="form-control"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-25 mx-auto">
                    <br />
                    <input
                        className="form-control"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-25 mx-auto">
                    <br />
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-50 mx-auto">
                    <br />
                    <textarea
                        className="form-control"
                        name="comments"
                        placeholder="Comments"
                        rows="6"
                        cols="50"
                        value={form.comments}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>

    );
}

export default Contact;