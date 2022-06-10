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
    editPlayer: (players, action) => ({
      ...players,
      allPlayers: players.allPlayers.map((player) =>
        player.id === action.payload.id ? { ...action.payload } : { ...player }
      ),
    }),
  },
});

export const {
  loadAllPlayers: loadAllPlayersActionCreator,
  deletePlayer: deletePlayerActionCreator,
  editPlayer: editPlayerActionCreator,
} = playerSlice.actions;

export default playerSlice.reducer;
