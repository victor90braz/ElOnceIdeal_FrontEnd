import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    allPlayers: [],
  },
  reducers: {
    loadAllPlayers: (players, action) => ({
      ...players,
      allPlayers: action.payload,
    }),
    deletePlayer: (players, action) => ({
      ...players,
      allPlayers: players.allPlayers.filter(
        (player) => player.id !== action.payload
      ),
    }),
  },
});

export default playerSlice.reducer;

export const {
  loadAllPlayers: loadAllPlayersActionCreator,
  deletePlayer: deletePlayerActionCreator,
} = playerSlice.actions;
