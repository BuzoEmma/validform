import { useState, useEffect } from "react";

const useForm = (validateInofr, submitForm) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  console.log(values);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInofr(values));
    setIsSubmitted(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmitted) {
      submitForm(true);
    }
  }, [errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { errors, values, handleChange, handleSubmit };
};

export default useForm;
