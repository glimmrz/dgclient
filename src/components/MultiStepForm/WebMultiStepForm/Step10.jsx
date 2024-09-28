import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils/constants";

const Step10 = ({ onPrevious, onSubmit, previousData }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const price = queryParams.get("price");
  const product = queryParams.get("product");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    company: "",
    stape_4: "",
    web_pages: "",
    company_description: "",
    source_4: "",
    source_5: "",
    additional_needs: "",
    source_6: "",
    source_7: "",
    source_9: "",
    price: price || "",
    product: product || "",
  });

  useEffect(() => {
    if (previousData) {
      setFormData((prevData) => ({
        ...prevData,
        ...previousData,
      }));
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

  const validate = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required.";
    if (!formData.phone_number)
      newErrors.phone_number = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const finalData = {
        ...formData,
      };

      try {
        await axios.post(`${API_URL}/api/submit-forms`, finalData);
        onSubmit(finalData);
        alert("Form submitted successfully");
      } catch (error) {
        console.error("There was an error submitting the form:", error);
        alert("Error submitting form");
      }
    }
  };

  return (
    <div className="form-step10">
      <p>
        <span className="step-number">10 →</span> Your contact information*
      </p>
      <div className="form-wrapper">
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
            placeholder="771234567"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
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
            required
          />
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
        </div>
        <div className="form-buttons">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
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
      </div>
    </div>
  );
};

export default Step10;
