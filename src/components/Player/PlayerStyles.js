import styled from "styled-components";

const PlayerStyles = styled.div`
  .container {
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
  }

  .card {
    border-radius: 15px;
    overflow: hidden;
    margin: auto;
    width: 100%;
    height: auto;
    box-shadow: 1px 3px 5px rgb(0 0 0 / 10%);
  }

  .photo {
    background: linear-gradient(to bottom, #fcf5aa, #ddc771);
    width: 100vh;
    height: 50vh;
    overflow: hidden;
  }

  .photo img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }

  .details {
    background: linear-gradient(to bottom, #feec97, #dcc673);
    border-top: 1px solid #ffffee;
    color: #46390c;
  }

  .details .name {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }

  .details .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 0.5em;
    list-style: none;
    padding: 0.5em 0;
    width: 80%;
    border-top: 1px solid #b4a25b;
    margin: auto;
  }

  .details .stats li {
    font-size: 2.15em;
    padding: 0.3em 0 0;
  }

  .details .stats li > span {
    font-weight: bold;
  }

  .details .stats li:nth-child(2n) {
    border-left: 1px solid #b4a25b;
    padding-left: 1em;
  }

  .details .actions {
    z-index: 2;
    margin-top: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background: white;
  }

  .details .actions button {
    padding: 10px 8px;
    width: 100%;
    color: #71aad3;
    box-shadow: rgb(0 0 0 / 80%) 0px 1px 1px;
    cursor: pointer;
    background-color: black;
  }
`;

export default PlayerStyles;
