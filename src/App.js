import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ListPlayers from "./components/ListPlayers/ListPlayers";

import LoginPage from "./pages/LoginPage/LoginPage";
import PlayerPage from "./pages/PlayerPage/PlayersPage";

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
        <PlayerPage />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/players" element={<ListPlayers />} />
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
