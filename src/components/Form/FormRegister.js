import React from "react";
import FormRegisterStyled from "./FormRegisterStyled";

const FormRegister = () => {
  return (
    <FormRegisterStyled>
      <form>
        <label htmlFor="name">name</label>
        <input type="text" required />

        <label htmlFor="password">email</label>
        <input type="text" required />

        <label htmlFor="password">password</label>
        <input type="text" required />
      </form>
      <button>Confirm</button>
    </FormRegisterStyled>
  );
};
export default FormRegister;
