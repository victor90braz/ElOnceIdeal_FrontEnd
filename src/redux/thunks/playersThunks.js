import axios from "axios";
import { loadAllPlayersActionCreator } from "../features/playerSlice";

const url = process.env.REACT_APP_API_URL;

export const loadPlayersThunk = () => async (dispatch) => {
  const { data } = await axios.get(`${url}players/`);

  dispatch(loadAllPlayersActionCreator(data));
};
