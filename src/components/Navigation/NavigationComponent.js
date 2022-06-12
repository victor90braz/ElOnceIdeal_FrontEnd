import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { correctAction } from "../modals/modals";
import { NavigationComponentStyled } from "./NavigationComponentStyle";

const NavigationComponent = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    Navigate("/login");
    correctAction("Logged out");
  };

  return (
    <NavigationComponentStyled>
      <nav className="top-nav">
        <ul className="menu">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create Card</NavLink>
          </li>
          <li>
            <NavLink to="/edit">Edit Card</NavLink>
          </li>

          <li>
            <NavLink to="/card">CardPlayer</NavLink>
          </li>

          <li>
            <NavLink to="/home">
              <button onClick={logOut} className="logOut">
                Logout
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavigationComponentStyled>
  );
};

export default NavigationComponent;
