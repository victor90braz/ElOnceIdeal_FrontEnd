import styled from "styled-components";

export const NavigationComponentStyled = styled.header`
  margin: 0;
  padding: 0;
  height: 70px;
  background-color: black;
  width: 100vw;
  display: flex;
  justify-content: center;
  opacity: 0.8;

  .top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    list-style-type: none;
    font-size: 1.5em;
    color: white;
  }

  .logOut {
    cursor: pointer;
    font-size: 1.2em;
  }
  .menu li a {
    color: white;
  }
`;
