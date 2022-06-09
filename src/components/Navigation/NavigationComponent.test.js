import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NavigationComponent from "./NavigationComponent";

describe("Given a NavigationComponent", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a NavigationComponent with four list components", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NavigationComponent />
          </BrowserRouter>
        </Provider>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader).toHaveLength(3);
    });
  });
});
