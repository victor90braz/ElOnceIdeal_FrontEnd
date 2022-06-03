import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegistersPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Name'", () => {
      const expectedResult = "Name";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByLabelText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
