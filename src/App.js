import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AccessControl from "./pages/AccessControl/AccessControl";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";
import CreatorPlayer from "./components/CreaterPlayer.js/CreatorPlayer";
import EditPage from "./pages/EditPage/EditPage";
import DetailPlayer from "./components/DetailPlayer/DetailPlayer";
import NavigationComponent from "./components/Navigation/NavigationComponent";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const { logged } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!logged && token) {
      const userInfo = jwtDecode(token);

      dispatch(loginActionCreator(userInfo));
      navigate("/home");
    }
  }, [dispatch, logged, navigate, token]);

  return (
    <AppStyle>
      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/register" && (
          <>
            <NavigationComponent />
          </>
        )}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/create"
          element={
            <AccessControl>
              <CreatorPlayer />
            </AccessControl>
          }
        />

        <Route
          path="/edit/:playerId"
          element={
            <AccessControl>
              <EditPage />
            </AccessControl>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <AccessControl>
              <DetailPlayer />
            </AccessControl>
          }
        />

        <Route
          path="/home"
          element={
            <AccessControl>
              <HomePage />
            </AccessControl>
          }
        />
      </Routes>
    </AppStyle>
  );
}

export default App;
