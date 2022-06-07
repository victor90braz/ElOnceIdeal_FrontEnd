import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/userThunks";

import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blankFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const buttonDisabled =
    formData.name === "" ||
    formData.password === "" ||
    formData.username === "";

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitRegister = (event) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData(blankFields);

    navigate("/login");
  };

  return (
    <RegisterFormStyle>
      <h2>Register</h2>
      <form autoComplete="off" noValidate onSubmit={submitRegister}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Name"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          placeholder="Password"
        />
        <button disabled={buttonDisabled} type="submit" className="form-button">
          Register
        </button>
      </form>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
