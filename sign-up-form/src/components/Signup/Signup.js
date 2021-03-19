import React, { useState } from "react";
import "./Signup.css";

export const Signup = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };
  return (
    <div className="box">
      <div className="Top-Button">
        <p className="Top-Button-Text">
          <b>Try it free 7 days</b> then $20/mo. thereafter
        </p>
      </div>
      <div className="Form">
        {submitting && <div>Submitting Form...</div>}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <input name="name" placeholder="First Name" />
            </label>
            <label>
              <input name="name" placeholder="Last Name" />
            </label>
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
            <p className="terms">
              By clicking this button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Signup;
