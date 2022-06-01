import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    register: (user, action) => ({
      userInfo: { ...action.payload },
    }),
  },
});

export const { register: registerActionCreator } = userSlice.actions;

export default userSlice.reducer;
