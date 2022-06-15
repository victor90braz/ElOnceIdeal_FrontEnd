import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { NavigationComponentStyled } from "./NavigationComponentStyle";
import { AiOutlineLogin } from "react-icons/ai";
import { SiHomebridge } from "react-icons/si";
import { MdCreateNewFolder } from "react-icons/md";

const NavigationComponent = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    Navigate("/login");
  };

  return (
    <NavigationComponentStyled>
      <ul className="menu">
        <li>
          <NavLink to="/home">
            <div className="container-icon">
              <SiHomebridge size={50} color="white" />
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/create">
            <div className="container-icon">
              <MdCreateNewFolder size={50} color="white" />
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/login">
            <div className="container-icon">
              <AiOutlineLogin size={50} color="white" onClick={logOut} />
            </div>
          </NavLink>
        </li>
      </ul>
    </NavigationComponentStyled>
  );
};

export default NavigationComponent;
