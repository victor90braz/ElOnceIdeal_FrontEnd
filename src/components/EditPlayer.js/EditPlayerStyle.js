import styled from "styled-components";

const EditPlayerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;

  h2 {
    font-size: 2em;
    color: #f5f8fa;
    background: #1da1f2;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    font-size: 1.2em;
    color: white;
  }

  input {
    height: 40px;
    margin-top: 10px;
    font-family: inherit;
    font-size: 0.9em;
    width: 40%;
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
  }

  small {
    color: white;
  }
  span {
    color: red;
    font-weight: 600;
  }
`;

export default EditPlayerStyle;
