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
            <NavLink to="/home">
              <div className="container-image">
                <img
                  src="https://www.kindpng.com/picc/m/207-2070607_back-to-the-home-page-back-to-home.png"
                  alt="Home page with the list of all players"
                />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">
              <div className="container-image">
                <img
                  src="https://www.vhv.rs/dpng/d/276-2761848_user-plus-user-user-add-profile-avatar-person.png"
                  alt="Create a new player card"
                />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/edit">
              <div className="container-image">
                <img
                  src="https://p.kindpng.com/picc/s/154-1541056_edit-edit-icon-svg-hd-png-download.png"
                  alt="Edit your player"
                />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/detail/:id">
              <div className="container-image">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/158/485/original/line-icon-for-policy-vector.jpg"
                  alt="Detail page of player"
                />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login">
              <div className="container-image">
                <button onClick={logOut} className="logOut">
                  <img
                    src="https://www.freeiconspng.com/thumbs/sign-out-icon/sign-out-logout-icon-0.png"
                    alt="Logout to login"
                  />
                </button>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavigationComponentStyled>
  );
};

export default NavigationComponent;
