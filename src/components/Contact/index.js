import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="text-light w-75 mx-auto my-5">
      <h1>Contact</h1>
      <form id="contact-form">
        <div className="form-group my-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="text-danger">{errorMessage}</p>
          </div>
        )}
        <button
          className="btn submit text-light my-3"
          type="submit"
          onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;