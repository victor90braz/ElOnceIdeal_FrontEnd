import styled from "styled-components";

const PlayerStyles = styled.div`
  .card {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 60vh;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0 35px 80px rgba(0, 0, 1, 1);
  }

  .card .player-name {
    color: #7e27ed;
    top: -50px;
    position: absolute;
    align-items: center;
  }

  .card-image {
    position: absolute;
    border-radius: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-image img {
    position: absolute;
    border-radius: 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card .card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .card-content .card-content_details {
    padding: 40px;
    text-align: center;
    width: 100%;
    transition: 0.5s;
    background-color: #fff;
    opacity: 0.8;
  }

  .card-content .card-content_details h2 {
    font-size: 2.2em;
  }

  .card-content .card-content_details .data {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .card-content .card-content_details .data h3 {
    font-size: 1.2em;
    color: #555;
    line-height: 1.2em;
    font-weight: 600;
  }

  .container-element {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .elemento-add {
    font-size: 2em;
    cursor: pointer;
  }
`;

export default PlayerStyles;
