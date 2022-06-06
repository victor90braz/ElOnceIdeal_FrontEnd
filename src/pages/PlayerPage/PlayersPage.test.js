import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PlayerPage from "./PlayersPage";

describe("Given a LoginPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Players'", () => {
      const expectedResult = "Players";

      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <PlayerPage />
            </BrowserRouter>
          </Provider>
        </>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
