import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When the word 'hello' is written to the username input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const labelToFind = "Name";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);

      expect(label).toBeInTheDocument();
    });
  });
});
