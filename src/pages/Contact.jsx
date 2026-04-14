import { useState } from "react";

function Contact() {
   const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
   });

}

export default Contact;