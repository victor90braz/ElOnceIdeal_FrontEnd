import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { correctAction } from "../modals/modals";
import { NavigationComponentStyled } from "./NavigationComponentStyle";
import { AiOutlineLogin } from "react-icons/ai";

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
            <NavLink to="/home">
              <div className="container-image">
                <img
                  src="images/home-icon.png"
                  alt="Home page with the list of all players"
                />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/create">
              <div className="container-image">
                <img
                  src="images/create-icon.jpg"
                  alt="Create a new player card"
                />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login">
              <div className="container-image">
                <AiOutlineLogin size={50} color="white" onClick={logOut} />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavigationComponentStyled>
  );
};

export default NavigationComponent;
