import styled from "styled-components";

const CreatorPlayerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;

  h2 {
    color: white;
    background-color: #1da1f2;
    width: 80%;
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    list-style-type: none;
    margin: auto;
    background: black;
    opacity: 0.8;
    padding: 30px;
    width: 100vw;
  }

  li {
    width: 50%;
    margin: auto;
    align-items: center;
  }

  label {
    color: white;
    font-size: 1.2em;
    background: black;
    margin: auto;
    align-items: center;
    display: contents;
  }

  input {
    height: 40px;
    margin-top: 10px;
    font-family: inherit;
    font-size: 0.9em;
    overflow: hidden;
    width: 150px;
  }

  .form-button {
    padding: 10px 45px;
    margin: 10px 0;
    border: none;
    font-size: 2em;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #1da1f2;
    color: #f5f8fa;
    cursor: pointer;
    background-color: #1da1f2;
    justify-content: center;
  }
`;

export default CreatorPlayerStyle;
