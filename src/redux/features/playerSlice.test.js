import playerReducer, { loadAllPlayersActionCreator } from "./playerSlice";

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

      const action = loadAllPlayersActionCreator(player);

      const receivedValue = playerReducer([], action);

      expect(receivedValue).toStrictEqual(loadedPlayer);
    });
  });
});
