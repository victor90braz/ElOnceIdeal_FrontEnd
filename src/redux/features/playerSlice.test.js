import playerReducer, {
  deletePlayerActionCreator,
  loadAllPlayersActionCreator,
} from "./playerSlice";

describe("Given a playerSlice reducer", () => {
  describe("When its invoked with an unknown action and a player as initialValue", () => {
    test("Then it should return the same player", () => {
      const action = {
        type: "player/unknownAction",
      };

      const initialValue = [
        {
          name: "Buffon",
          image:
            "https://www.futbin.com/content/fifa22/img/players/p50332827.png?v=15",
          username: "buffon1977",
        },
      ];

      const receivedValue = playerReducer(initialValue, action);

      expect(receivedValue).toBe(initialValue);
    });
  });

  describe("When its invoked with a player action and a user", () => {
    test("Then it should return the user", () => {
      const player = [
        {
          name: "Buffon",
          image:
            "https://www.futbin.com/content/fifa22/img/players/p50332827.png?v=15",
          username: "buffon1977",
        },
      ];

      const loadedPlayer = {
        allPlayers: [
          {
            name: "Buffon",
            image:
              "https://www.futbin.com/content/fifa22/img/players/p50332827.png?v=15",
            username: "buffon1977",
          },
        ],
      };

      const action = {
        type: "player/unknownAction",
        allPlayers: loadAllPlayersActionCreator(player),
      };

      const initialState = {
        allPlayers: [
          {
            image:
              "https://www.futbin.com/content/fifa22/img/players/p50332827.png?v=15",
            name: "Buffon",
            username: "buffon1977",
          },
        ],
      };
      const receivedValue = playerReducer(initialState, action);

      expect(receivedValue).toStrictEqual(loadedPlayer);
    });
  });
});

describe("Given a delete reducer", () => {
  describe("When its invoked with an unknown action and a player as initialValue", () => {
    test("Then it should delete the player", () => {
      const initialValue = {
        allPlayers: [
          {
            id: "1",
            name: "Ronaldo",
            username: "CR7",
            perfil: "Portugal",
          },
        ],
      };

      const expectedState = {
        allPlayers: [],
      };

      const id = "1";

      const action = deletePlayerActionCreator(id);
      const newState = playerReducer(initialValue, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
