import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";

import LoginFormStyle from "./LoginFormStyle";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormValue = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValue);

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValues.username === "" || formValues.password === "") {
      return;
    }
    await dispatch(loginThunk(formValues));
    setFormValues(initialFormValue);
    navigate("/home");
  };

  return (
    <LoginFormStyle>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formValues.username}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formValues.password}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </LoginFormStyle>
  );
};

export default LoginForm;
