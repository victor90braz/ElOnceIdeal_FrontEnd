import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate("/login"),
}));

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
    test("Then the two inputs should render a text 'hello'", () => {
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

      expect(username).toHaveValue("hello");
      expect(password).toHaveValue("hello");
      expect(name).toHaveValue("hello");
    });
  });

  describe("When the username is 'hello', the password input is empty and the submit is clicked", () => {
    test("Then the username should be 'hello'", async () => {
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

      await userEvent.click(submitButton);

      expect(username).toHaveValue(inputText);
    });

    test("Then the username should be 'hello2'", async () => {
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

      await userEvent.click(submitButton);
      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });

  describe("When an user only types 'hello wolrd' in the username input field", () => {
    test("Then the value of the username input field should be 'hello wolrd' but the register buttom shall remain disable", () => {
      const usernameTextField = "Username";
      const inputUserNAme = "hello wolrd";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /Register/i,
      });

      const usernameField = screen.getByLabelText(usernameTextField);
      userEvent.type(usernameField, inputUserNAme);

      expect(usernameField).toHaveValue(inputUserNAme);
      expect(createdButton).toBeDisabled();
    });
  });
});
