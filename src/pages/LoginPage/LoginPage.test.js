import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a RegistersPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Username'", () => {
      const expectedResult = "Username";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByLabelText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
