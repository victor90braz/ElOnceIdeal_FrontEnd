import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Make your dream team'", () => {
      const expectedText = "Make your dream team";

      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          </Provider>
        </>
      );

      const result = screen.getByRole("heading", { level: 2 });
      expect(result.textContent).toBe(expectedText);
    });
  });
});
