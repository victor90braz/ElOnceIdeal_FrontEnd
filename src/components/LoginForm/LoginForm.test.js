import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

import LoginForm from "./LoginForm";

global.window = Object.create(window);
const url = "http://dummy.com";
Object.defineProperty(window, "location", {
  value: {
    href: url,
  },
});

expect(window.location.href).toEqual(url);

describe("Given a LoginForm component", () => {
  describe("When the word 'hello' is written to the username input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const labelToFind = "Username";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });

  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should have the text 'hello'", () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("hello");
      expect(password).toHaveValue("hello");
    });
  });

  describe("When the username is 'hello', the password input is empty and the submit is clicked", () => {
    test("Then the username should be 'hello'", async () => {
      const usernameLabel = "Username";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);

      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);

      await userEvent.click(submitButton);

      expect(username).toHaveValue(inputText);
    });
  });
});
