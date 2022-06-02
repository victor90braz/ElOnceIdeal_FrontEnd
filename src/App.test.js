import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import store from "./redux/store/store";

describe("Given a App component", () => {
  describe("When the word 'El Once Ideal' is written to the header element", () => {
    test("Then the value of the header element should be 'El Once Ideal'", () => {
      const expectedResult = "El Once Ideal";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
