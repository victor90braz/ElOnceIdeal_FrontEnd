import styled from "styled-components";

const CreatePlayerStyle = styled.div`
  .mainscreen {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #dfdbe5;
    color: #963e7b;
  }

  h1,
  h2,
  h3,
  label {
    color: white;
    margin: 15px 0 15px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .container-inputs {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
  }

  .card {
    width: 60rem;
    margin: auto;
    background: white;
    position: center;
    align-self: center;
    top: 50rem;
    border-radius: 1.5rem;
    box-shadow: 4px 3px 20px #3535358c;
    display: flex;
    flex-direction: row;
  }

  .leftside {
    background: #030303;
    width: 25rem;
    display: inline-flex;
    align-items: center;

    justify-content: center;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }

  ul {
    color: white;
  }

  .product {
    object-fit: cover;
    width: 20em;
    height: 20em;
    border-radius: 100%;
  }

  .rightside {
    background-color: #ffffff;
    width: 35rem;
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 1rem 2rem 3rem 3rem;
  }

  label {
    display: block;
    font-size: 1.1rem;
    font-weight: 400;
  }

  .icon {
    color: #00fd0a;
  }

  span {
    color: white;
  }

  .inputbox {
    color: #030303;
    width: 100%;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1.5px solid #ccc;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    font-family: "Roboto", sans-serif;
    color: #615a5a;
    font-size: 1.1rem;
    font-weight: 500;
    outline: none;
  }

  .expcvv {
    display: flex;
    justify-content: space-between;
    padding-top: 0.6rem;
  }

  .expcvv_text {
    padding-right: 1rem;
  }
  .expcvv_text2 {
    padding: 0 1rem;
  }

  .button {
    background: linear-gradient(135deg, #753370 0%, #298096 100%);
    padding: 15px;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 10px;
    width: 100%;
    letter-spacing: 0.11rem;
    outline: none;
  }

  .button:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 3px 3px 6px #38373785;
  }

  @media only screen and (max-width: 1000px) {
    .card {
      flex-direction: column;
      width: auto;
    }

    .container-inputs {
      display: flex;
      flex-direction: column;
      gap: 3px;
      list-style-type: none;
      padding-left: 0;

      li {
        display: flex;
        gap: 3px;
      }
    }

    .leftside {
      width: 100%;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 0;
      border-radius: 0;
    }

    .rightside {
      width: auto;
      border-bottom-left-radius: 1.5rem;
      padding: 0.5rem 3rem 3rem 2rem;
      border-radius: 0;
    }

    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

    * {
      margin: 0;

      font-family: "Poppins", sans-serif;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #151515;
    }
    div {
      position: absolute;
    }
    #rangeValue {
      position: relative;
      display: block;
      text-align: center;
      font-size: 6em;
      color: #999;
      font-weight: 400;
    }
    .range {
      width: 400px;
      height: 15px;
      -webkit-appearance: none;
      background: #111;
      outline: none;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
    }
    .range::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #00fd0a;
      cursor: pointer;
      border: 4px solid #333;
      box-shadow: -407px 0 0 400px #00fd0a;
    }
  }
`;

export default CreatePlayerStyle;
