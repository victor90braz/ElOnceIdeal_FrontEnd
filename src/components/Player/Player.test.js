import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPlayer } from "../../mocks/playerMock";
import store from "../../redux/store/store";

import Player from "./Player";

describe("Given the Player component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading h3 element", () => {
      const expectedResult = "SPEED";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Player player={mockPlayer} />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
