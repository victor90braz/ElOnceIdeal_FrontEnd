import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When the word 'hello' is written to the username input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const labelToFind = "Username";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the two inputs have text and the submit button is clicked", () => {
    test.only("Then the two inputs should be empty", () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const nameLabel = "Name";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const name = screen.getByLabelText(nameLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.type(name, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("");
      expect(password).toHaveValue("");
      expect(name).toHaveValue("");
    });
  });

  describe("When the username is 'hello', the password input is empty and the submit is clicked", () => {
    test("Then the username should be 'hello'", () => {
      const usernameLabel = "Username";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);

      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);

      userEvent.click(submitButton);

      expect(username).toHaveValue(inputText);
    });
  });
});
