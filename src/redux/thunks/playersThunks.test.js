import "../../mocks/server";
import { mockPlayers } from "../../mocks/playerMock";
import { loadAllPlayersActionCreator } from "../features/playerSlice";
import { loadPlayersThunk } from "./playersThunks";

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
