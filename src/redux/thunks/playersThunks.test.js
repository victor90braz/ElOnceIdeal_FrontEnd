import "../../mocks/server";
import { mockPlayer, mockPlayers } from "../../mocks/playerMock";
import { loadAllPlayersActionCreator } from "../features/playerSlice";
import { getPlayerThunk, loadPlayersThunk } from "./playersThunks";

describe("Given the loadPlayersThunk function", () => {
  describe("When invoked", () => {
    test("Then it should dispatch the loadAllPlayersActionCreator with a list of games", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadAllPlayersActionCreator(mockPlayers);

      const thunk = loadPlayersThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the getGameThunk function", () => {
  describe("When invoked with an ID 1", () => {
    test("Then it should dispatch the loadGameActionCreator with a game", async () => {
      const playerID = "1";
      const dispatch = jest.fn();
      const expectedAction = loadAllPlayersActionCreator(mockPlayer);

      const thunk = getPlayerThunk(playerID);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
