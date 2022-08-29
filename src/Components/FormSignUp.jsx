import React from "react";
import useForm from "./useForm";
import validateInofr from "./ValideteInfor";
const FormSignUp = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInofr, submitForm);
  return (
    <>
      <form action="validation" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Buzo"
            value={values.username}
            onChange={handleChange}
          />
          <p>{errors.username}</p>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="buzoemma@gmail.com"
          />
          <p>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="on"
            value={values.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="password2"
            placeholder="Password"
            autoComplete="on"
            value={values.password2}
            onChange={handleChange}
          />
          <p>{errors.password2}</p>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default FormSignUp;
