import React, { useReducer, useState } from "react";
import "./Signup.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const Signup = () => {
  const [setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  const handleChange = (event) => {
    setFormData({ name: event.target.name, value: event.target.value });
  };
  return (
    <div className="box">
      <button className="Top-Button">
        <p className="Top-Button-Text">
          <b>Try it free 7 days</b> then $20/mo. thereafter
        </p>
      </button>
      <div className="Form">
        {submitting && <div>Submitting Form...</div>}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <input
                name="name"
                placeholder="First Name"
                onChange={handleChange}
              />
            </label>
            <label>
              <input name="name" placeholder="Last Name" />
            </label>
            <label>
              <input name="email" placeholder="Email Address" />
            </label>
            <label>
              <input
                name="password"
                type="password"
                placeholder="Password"
              ></input>
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
