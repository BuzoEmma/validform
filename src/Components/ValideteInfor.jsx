export default function validateInofr(value) {
  const errors = {};
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.username) {
    errors.username = "Input Username";
  }
  if (!value.password) {
    errors.password = "Input Password";
  } else if (value.password.length < 6) {
    errors.password = "Password Should Be More Than 6 Characters";
  } else if (value.password.length > 10) {
    errors.password = "Password Not Be More Than 10 Characters";
  }
  if (!value.email) {
    errors.email = "Input Email";
  } else if (!regEmail.test(value.email)) {
    errors.email = "Input Valid Email";
  }
  if (!value.password2) {
    errors.password2 = "Verify Your Password";
  } else if (value.password !== value.password2) {
    errors.password2 = `Password Doesn't Match`;
  }
  return errors;
}
