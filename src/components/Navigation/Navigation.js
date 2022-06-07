import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStyle from "./NavigationStyle";

const Navigation = () => {
  return (
    <NavigationStyle>
      <ul>
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
      </ul>
    </NavigationStyle>
  );
};

export default Navigation;
