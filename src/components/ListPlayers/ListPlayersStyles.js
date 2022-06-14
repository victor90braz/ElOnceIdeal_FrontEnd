import styled from "styled-components";

const ListPlayersStyles = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.5em;
    margin: auto;
  }

  .container-element {
    margin-bottom: 50px;

    .container-image {
      width: 100px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default ListPlayersStyles;
