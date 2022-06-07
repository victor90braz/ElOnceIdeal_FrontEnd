import { NavLink } from "react-router-dom";
import { NavigationComponentStyled } from "./NavigationComponentStyle";

const NavigationComponent = () => {
  return (
    <NavigationComponentStyled>
      <nav className="top-nav">
        <ul className="menu">
          <li>
            <NavLink to="/home">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/home">Log out</NavLink>
          </li>
        </ul>
      </nav>
    </NavigationComponentStyled>
  );
};

export default NavigationComponent;
