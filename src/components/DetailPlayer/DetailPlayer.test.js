import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPlayer } from "../../mocks/playerMock";
import store from "../../redux/store/store";
import DetailPlayer from "./DetailPlayer";

describe("Given a DetailPlayer", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a DetailPlayer with four list components", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPlayer player={mockPlayer} />
          </BrowserRouter>
        </Provider>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader).toHaveLength(1);
    });
  });
});
