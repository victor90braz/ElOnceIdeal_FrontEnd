import styled from "styled-components";

const EditPlayerStyle = styled.div`
  background: url("https://i.pinimg.com/originals/de/65/80/de65803bb7183902a820eda364c3282c.png");
  object-fit: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2em;
    color: #f5f8fa;
    background: #1da1f2;
    width: 100%;
    padding: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    border-radius: 40px;
  }
`;

export default EditPlayerStyle;
