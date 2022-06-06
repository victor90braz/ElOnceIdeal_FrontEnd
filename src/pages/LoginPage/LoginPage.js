import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to="/home">HomePage</NavLink>
    </>
  );
};

export default LoginPage;
