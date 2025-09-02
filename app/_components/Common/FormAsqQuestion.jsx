"use client";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormAsqQuestion() {
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
    const subject = encodeURIComponent("Question from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    setFormData(initialFormData);
    toast.success(`Thank you! Your question has been prepared for sending.`);
  };
  return (
    <div className="md:flex md:justify-center">
      <div className="only-lg:basis-5/6 lg:basis-2/3">
        <form onSubmit={handleSubmit} className="md:text-center">
          <div className="form__holder">
            <input
              type="text"
              name="name"
              autoComplete="on"
              placeholder="Your Name"
              className="form__control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[15px]">
            <div className="form__holder">
              <input
                type="text"
                autoComplete="on"
                className={`form__control`}
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__holder">
              <input
                type="text"
                autoComplete="on"
                className="form__control"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form__holder">
            <textarea
              rows="5"
              className="form__control"
              placeholder="Question"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn btn__type2">
            <span>Ask Question</span>
          </button>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
}
export default FormAsqQuestion;
