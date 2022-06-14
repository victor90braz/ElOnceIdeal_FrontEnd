import styled from "styled-components";

const PlayerStyles = styled.div`
  .container {
    width: 100%;
    height: auto;
    align-items: center;
    margin-bottom: 40px;
  }

  .card {
    border-radius: 15px;
    overflow: hidden;
    margin: auto;
    width: 100%;
    height: auto;
  }

  .photo {
    background: linear-gradient(to bottom, #fcf5aa, #ddc771);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vh;
    height: 50vh;
    object-fit: cover;
  }

  .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  }

  .details .actions button {
    background: white;
    border-radius: 3px;
    font-size: 3em;
    text-transform: lowercase;
    border: 0;
    padding: 4px 8px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
`;

export default PlayerStyles;
