import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../redux/store/store";

import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When the word 'hello' is written to the username input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const labelName = "Name";
      const labelSurname = "Username";
      const labelPassowrd = "Password";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const label1 = screen.getByLabelText(labelName);
      const label2 = screen.getByLabelText(labelSurname);
      const label3 = screen.getByLabelText(labelPassowrd);

      expect(label1).toBeInTheDocument();
      expect(label2).toBeInTheDocument();
      expect(label3).toBeInTheDocument();
    });
  });

  describe("When the word 'Register' is written to the header element", () => {
    test("Then the value of the header element should be 'Register'", () => {
      const expectedResult = "Register";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
