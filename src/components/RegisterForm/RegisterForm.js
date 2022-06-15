import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/userThunks";
import { correctAction, wrongAction } from "../modals/modals";

import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

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

  const submitRegister = async (event) => {
    try {
      event.preventDefault();
      await dispatch(registerThunk(formData));
      setFormData(blankFields);
      correctAction("Register successfully.");

      Navigate("/login");
    } catch (error) {
      wrongAction("Error. Username already exists. Please try again.");
    }
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
