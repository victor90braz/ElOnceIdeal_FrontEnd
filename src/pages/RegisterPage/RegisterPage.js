import { NavLink } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default RegisterPage;
