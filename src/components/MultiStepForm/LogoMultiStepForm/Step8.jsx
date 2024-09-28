import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { API_URL } from "../../../utils/constants";

const Step8 = ({ onPrevious, onSubmit, previousData }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const price = queryParams.get("price");
  const product = queryParams.get("product");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    logoType: "",
    fontSelection: "",
    companyDescription: "",
    websites: "",
    details: "",
    additionalNeeds: "",
    Product: "",
    Price: "",
  });
  const [errors, setErrors] = useState({});

  // Initialize formData with previousData if available
  useEffect(() => {
    if (previousData) {
      setFormData({
        ...previousData,
        firstName: previousData.firstName || "",
        lastName: previousData.lastName || "",
        phoneNumber: previousData.phoneNumber || "",
        email: previousData.email || "",
        company: previousData.company || "",
        option: previousData.logoType || "",
        option1: previousData.fontSelection || "",
        option2: previousData.companyDescription || "",
        option3: previousData.websites || "",
        option4: previousData.details || "",
        option5: previousData.additionalNeeds || "",
        product: product || "",
        price: price || "",
      });
    }
  }, [previousData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const validationErrors = {};

    // Simple validation example
    if (!formData.firstName)
      validationErrors.firstName = "First name is required";
    if (!formData.lastName) validationErrors.lastName = "Last name is required";
    if (!formData.phoneNumber)
      validationErrors.phoneNumber = "Phone number is required";
    if (!formData.email) validationErrors.email = "Email is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Combine previousData and current formData
    const finalData = {
      ...formData,
    };

    try {
      // Make a POST request to the backend API
      await axios.post(`${API_URL}/api/submit-forms`, finalData);
      onSubmit(finalData);
      alert("Form submitted successfully");
      console.log("Submitted Data:", finalData); // Logging the finalData to check its contents
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="form-step8">
      <p>
        <span className="step-number">8 →</span> Your contact information*
      </p>

      <div className="mb-5">
        <label htmlFor="first-name" className="form-label">
          First name *
        </label>
        <input
          type="text"
          className="form-control_custom"
          id="first-name"
          name="firstName"
          placeholder="Jane"
          value={formData.firstName}
          onChange={handleChange}
        />
        <hr />
        {errors.firstName && (
          <div className="text-danger">{errors.firstName}</div>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="last-name" className="form-label">
          Last name *
        </label>
        <input
          type="text"
          className="form-control_custom"
          id="last-name"
          name="lastName"
          placeholder="Smith"
          value={formData.lastName}
          onChange={handleChange}
        />
        <hr />
        {errors.lastName && (
          <div className="text-danger">{errors.lastName}</div>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="phone_number" className="form-label">
          Phone number *
        </label>
        <input
          type="text"
          className="form-control_custom"
          id="phone_number"
          name="phoneNumber"
          placeholder="01701005060"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <hr />
        {errors.phoneNumber && (
          <div className="text-danger">{errors.phoneNumber}</div>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="form-label">
          Email *
        </label>
        <input
          type="text"
          className="form-control_custom"
          id="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <hr />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>

      <div className="mb-5">
        <label htmlFor="company" className="form-label">
          Company
        </label>
        <input
          type="text"
          className="form-control_custom"
          id="company"
          name="company"
          placeholder="Acme Corporation"
          value={formData.company}
          onChange={handleChange}
        />
        <hr />
        {errors.company && <div className="text-danger">{errors.company}</div>}
      </div>

      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <button
        type="button"
        className="previous btn btn-secondary"
        onClick={onPrevious}
      >
        <span>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </button>
    </div>
  );
};

export default Step8;
