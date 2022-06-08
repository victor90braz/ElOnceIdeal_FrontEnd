import "../../mocks/server";
import { mockPlayer, mockPlayers } from "../../mocks/playerMock";
import {
  deletePlayerActionCreator,
  loadAllPlayersActionCreator,
} from "../features/playerSlice";
import {
  deletePlayerThunk,
  getPlayerThunk,
  loadPlayersThunk,
} from "./playersThunks";
import axios from "axios";

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

describe("Given the deletePlayerThunk function", () => {
  describe("When it's called with an id", () => {
    test("Then it should call dispatch with the loadPlayer action with the Player received from the axios request", async () => {
      const id = "2";
      const dispatch = jest.fn();
      const action = deletePlayerActionCreator(id);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({ status: 200 });

      const thunk = deletePlayerThunk(id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called with an existent id", () => {
    test("Then it should not call the dispatch", async () => {
      const id = "2";
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({});

      const thunk = deletePlayerThunk(id);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
