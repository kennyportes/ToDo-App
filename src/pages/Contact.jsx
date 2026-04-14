import { useState } from "react";

function Contact() {
   const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
   });

   function handleChange(e) {
    setForm({  ...form, [e.target.name]: e.target.value});
   }
}

export default Contact;