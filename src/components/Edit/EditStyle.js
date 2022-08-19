import styled from "styled-components";

const EditStyle = styled.div`
  body {
    min-height: 100vh;
    display: grid;
    align-items: center;
  }

  .container-inputs {
    display: flex;
    gap: 3px;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & > input {
      flex: 1 1 10ch;
      margin: 0.5rem;
    }
  }

  input {
    border: none;
    background: hsl(0 0% 93%);
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;

    &[type="submit"] {
      background: greenyellow;
      color: white;
      box-shadow: 0 0.75rem 0.5rem -0.5rem hsl(0 50% 80%);
    }
  }
`;

export default EditStyle;
