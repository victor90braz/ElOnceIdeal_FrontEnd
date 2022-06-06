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
  },
});

export default playerSlice.reducer;

export const { loadAllPlayers: loadAllPlayersActionCreator } =
  playerSlice.actions;
