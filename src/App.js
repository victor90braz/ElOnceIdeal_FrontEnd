import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

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
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </AppStyle>
    </>
  );
}

export default App;
