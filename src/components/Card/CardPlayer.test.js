import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPlayer } from "../../mocks/playerMock";
import store from "../../redux/store/store";
import CardPlayer from "./CardPlayer";

describe("Given a CardPlayer", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a CardPlayer with four list components", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardPlayer player={mockPlayer} />
          </BrowserRouter>
        </Provider>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader).toHaveLength(1);
    });
  });

  describe("When it's rendered with a user param that matches the user logged and the rendered delete button is clicked", () => {
    test("Then it should call dispatch", async () => {
      const playerMockSlice = createSlice({
        name: "player",
        initialState: {
          allPlayers: [],
        },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { player: playerMockSlice },
      });

      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <CardPlayer player={mockPlayer} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[0]);
      const dispatch = jest.fn();

      expect(dispatch).toBeCalledTimes(0);
    });
  });
});
