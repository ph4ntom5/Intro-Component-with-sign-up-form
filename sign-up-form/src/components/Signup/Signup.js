import React, { useState } from "react";
import "./Signup.css";
import supabase from "../../config/supabaseClient";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        // Post form data to Supabase database.
        const { data, error } = await supabase
          .from("Form_Data")
          .insert([formData]);
        if (error) {
          throw new Error(error.message);
        }
        console.log("Form data submitted successfully:", data);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    } else {
      console.log("Form submission failed");
    }
  };

  // Form Validation

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="box">
      <button className="Top-Button">
        <p className="Top-Button-Text">
          <b>Try it free 7 days</b> then $20/mo. thereafter
        </p>
      </button>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <div className="Error-Wrapper">
                {errors.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>
            </label>
            <label>
              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <div className="Error-Wrapper">
                {errors.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>
            </label>
            <label>
              <input
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="Error-Wrapper">
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </label>
            <label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="Error-Wrapper">
                {" "}
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
            </label>
            <button className="Claim-Button" type="submit">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="terms">
              By clicking this button, you are agreeing to our{" "}
              <button href="#">Terms and Services</button>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
