"use client";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormContact({ wrapperClass }) {
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;

    // For static sites, use mailto or external form service
    // Option 1: mailto link
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    // Option 2: You can replace this with Formspree, EmailJS, or other static form services
    // Example with Formspree:
    // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData)
    // });

    setFormData(initialFormData);
    toast.success(`Thank you! Your message has been prepared for sending.`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={wrapperClass ? `${wrapperClass} form` : "form"}
      >
        <h6 className="ttsubtitle">Send Message</h6>
        <div className="form__holder">
          <input
            type="text"
            name="name"
            autoComplete="on"
            className="form__control"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[15px]">
          <div className="form__holder">
            <input
              type="email"
              name="email"
              autoComplete="on"
              className="form__control"
              placeholder="E-mail *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__holder">
            <input
              type="text"
              name="phone"
              autoComplete="on"
              className="form__control"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form__holder">
          <textarea
            rows="8"
            placeholder="Message"
            className="form__control"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn__type2">
          <span>Send Message</span>
        </button>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
}
