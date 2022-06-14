import { NavLink } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyles";

const RegisterPage = () => {
  return (
    <>
      <RegisterPageStyled>
        <RegisterForm />
        <NavLink to="/login">
          <p>
            Have an account already? Please, <span> LOGIN </span>
          </p>
        </NavLink>
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
