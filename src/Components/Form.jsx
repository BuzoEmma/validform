import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";
import Login from "./Login";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <Login />}
      {/* <FormSuccess /> */}
    </div>
  );
};

export default Form;
