import { z } from "zod";
import React, { useState } from "react";
import "./Form.css";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is invalid"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Tell us more!"),
});

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      formSchema.parse(formData);
      alert("Form submitted succesfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      if (err.errors) {
        const validationErrors = {};
        err.errors.forEach((error) => {
          validationErrors[error.path[0]] = error.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>JOIN HYDRA</h1>
          <hr />
          <h2>Let’s Build Your VR Experience</h2>
        </div>
        <div className="form-input">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <div className="form-input-text">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span>{errors.subject}</span>}

          <textarea
            name="message"
            placeholder="Tell Us Something..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span>{errors.message}</span>}

          <button type="submit">SEND TO HYDRA</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
