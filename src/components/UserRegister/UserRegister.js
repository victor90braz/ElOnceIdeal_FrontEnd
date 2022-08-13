import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/userThunks";
import { wrongAction } from "../modals/modals";
import UserRegisterStyle from "./UserRegisterStyle";

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValue = {
    name: "",
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
    if (
      formValue.name === "" ||
      formValue.username === "" ||
      formValue.password === ""
    ) {
      wrongAction("Please fill all fields");
    }

    await dispatch(registerThunk(formValue));
    navigate("/login");
  };

  return (
    <UserRegisterStyle>
      <div className="container">
        <div>
          <img src="./top11-logo.png" alt="" className="brand-logo" />
        </div>
        <small>Have you already an account? </small>
        <NavLink to={"/login"} style={{ textDecoration: "none" }}>
          <div className="login">
            <small>Back to </small>Login
          </div>
        </NavLink>

        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="username">NAME</label>
            <input
              type="text"
              id="name"
              onChange={handleInputChange}
              value={formValue.name}
              placeholder="ronaldo"
              required
            />
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
            <button type="submit">REGISTER</button>
          </div>
        </form>
      </div>
    </UserRegisterStyle>
  );
};

export default UserRegister;
