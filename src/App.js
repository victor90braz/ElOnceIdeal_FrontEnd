import styled from "styled-components";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 50px;
  }
`;

function App() {
  return (
    <>
      <AppStyle>
        <h1>El Once Ideal</h1>
        <div className="container">
          <RegisterForm />
        </div>
      </AppStyle>
    </>
  );
}

export default App;
