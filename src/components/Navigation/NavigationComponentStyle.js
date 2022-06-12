import styled from "styled-components";

export const NavigationComponentStyled = styled.header`
  padding: 0;
  height: 70px;
  background-color: red;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;

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
    padding: 0;

    .container-image {
      width: 50px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        border-radius: 30%;
        object-fit: cover;
      }
    }
  }

  .logOut {
    cursor: pointer;
    font-size: 1.2em;
  }
`;
