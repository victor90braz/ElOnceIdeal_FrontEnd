import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ListPlayers from "../../components/ListPlayers/ListPlayers";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'El Once Ideal'", () => {
      const expectedText = "El Once Ideal";

      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <HomePage />
              <ListPlayers />
            </BrowserRouter>
          </Provider>
        </>
      );

      const result = screen.getByRole("heading", { level: 1 });
      expect(result.textContent).toBe(expectedText);
    });
  });
});
