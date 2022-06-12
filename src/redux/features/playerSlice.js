import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    allPlayers: [],
    player: {},
  },
  reducers: {
    loadAllPlayers: (players, action) => ({
      ...players,
      allPlayers: action.payload,
    }),
    loadPlayer: (player, action) => ({
      ...player,
      player: action.payload,
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
  addPlayer: addPlayerActionCreator,
  deletePlayer: deletePlayerActionCreator,
  editPlayer: editPlayerActionCreator,
  loadPlayer: loadPlayerActionCreator,
} = playerSlice.actions;

export default playerSlice.reducer;
