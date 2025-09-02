"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormAside = () => {
  const initialFormData = {
    name: "",
    email: "",
    question: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.question) return;

    // For static sites, use mailto or external form service
    const subject = encodeURIComponent("Service Question");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nQuestion: ${formData.question}`
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    setFormData(initialFormData);
    toast.success(`Thank you! Your question has been prepared for sending.`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={`relative`}>
        <div className="form__holder">
          <input
            type="text"
            autoComplete="on"
            className="form__control"
            placeholder="Your Name  *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
          <textarea
            rows="4"
            className="form__control"
            placeholder="Your Question *"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn__type2">
          <span>Send Question</span>
        </button>
        <ToastContainer autoClose={2000} />
      </div>
    </form>
  );
};
export default FormAside;
