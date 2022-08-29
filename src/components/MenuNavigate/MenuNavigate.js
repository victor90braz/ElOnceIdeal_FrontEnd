import { NavLink } from "react-router-dom";

import MenuNavigateStyle from "./MenuNavigateStyle";
import LogOut from "../LogOut/LogOut";

const MenuNavigate = () => {
  return (
    <MenuNavigateStyle>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to="/home" className="navbar-brand">
            <h1>El Once Ideal</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create" className="nav-link">
                  Builder Player
                </NavLink>
              </li>
            </ul>
            <form className="logout">
              <LogOut />
            </form>
          </div>
        </div>
      </nav>
    </MenuNavigateStyle>
  );
};

export default MenuNavigate;
