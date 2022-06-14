import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyles";

const LoginPage = () => {
  return (
    <>
      <LoginPageStyled>
        <LoginForm />
        <NavLink to={"/register"}>
          <p>
            Don't have an account yet? Please, <span> REGISTER</span>
          </p>
        </NavLink>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
