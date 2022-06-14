import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 150px;
  width: 100%;
  background: black;
  color: white;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;

  p {
    color: white;
  }

  span {
    color: red;
    font-size: 1.2em;
    cursor: pointer;
  }
`;

export default LoginPageStyled;
