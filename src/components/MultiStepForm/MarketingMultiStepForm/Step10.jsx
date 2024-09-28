import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { API_URL } from "../../../utils/constants";

const Step10 = ({ onSubmit, onPrevious, previousData }) => {
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
    marketing_goal: "",
    company_description: "",
    source_4: "",
    source_5: "",
    additional_needs: "",
    source_6: "",
    source_7: "",
    source_9: "",
  });

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
        option1: previousData.marketing_goal || "",
        option2: previousData.company_description || "",
        option3: previousData.source_4 || "",
        option4: previousData.source_5 || "",
        option5: previousData.additional_needs || "",
        option6: previousData.source_6 || "",
        option7: previousData.source_7 || "",
        option8: previousData.source_9 || "",
        product: product || "",
        price: price || "",
      });
    }
  }, [previousData]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate the form data
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required.";
    if (!formData.phone_number)
      newErrors.phone_number = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Email is invalid.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
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
    <div className="form-step10">
      <p>
        <span className="step-number">10 →</span> Your contact information*
      </p>
      <div className="mb-5">
        <label htmlFor="first-name" className="form-label">
          First name *
        </label>
        <input
          type="text"
          className="form-control_custom"
          id="first-name"
          name="first_name"
          placeholder="Jane"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <hr />
        {errors.first_name && (
          <div className="text-danger">{errors.first_name}</div>
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
          name="last_name"
          placeholder="Smith"
          value={formData.last_name}
          onChange={handleChange}
        />
        <hr />
        {errors.last_name && (
          <div className="text-danger">{errors.last_name}</div>
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
          name="phone_number"
          placeholder="01701005060"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <hr />
        {errors.phone_number && (
          <div className="text-danger">{errors.phone_number}</div>
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

export default Step10;
