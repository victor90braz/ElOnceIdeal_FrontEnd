import styled from "styled-components";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <AppStyle>
        <h1>El Once Ideal</h1>
        <RegisterForm />
      </AppStyle>
    </>
  );
}

export default App;
