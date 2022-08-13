import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";
import { wrongAction } from "../modals/modals";

import LoginFormStyle from "./LoginFormStyle";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValue = {
    username: "",
    password: "",
  };

  const [formValue, setFormValue] = useState(initialFormValue);

  const handleInputChange = (event) => {
    event.preventDefault();
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValue.username === "" || formValue.password === "") {
      wrongAction("Please fill all fields");
    }

    await dispatch(loginThunk(formValue));
    navigate("/home");
  };

  return (
    <LoginFormStyle>
      <div class="container">
        <div>
          <img src="./top11-logo.png" alt="" class="brand-logo" />
        </div>
        <small>Are you a new user?</small>
        <NavLink to={"/register"} style={{ textDecoration: "none" }}>
          <div class="register">
            <small>Click to </small>REGISTER
          </div>
        </NavLink>

        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div class="inputs">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              onChange={handleInputChange}
              value={formValue.username}
              placeholder="ronaldofenomeno"
              required
            />
            <label htmlFor="username">PASSWORD</label>
            <input
              type="password"
              id="password"
              onChange={handleInputChange}
              value={formValue.password}
              placeholder="Min 9 charaters long"
              minLength={9}
              required
            />
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </LoginFormStyle>
  );
};

export default LoginForm;
