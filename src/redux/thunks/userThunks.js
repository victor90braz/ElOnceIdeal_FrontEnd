import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loggedIn,
  registered,
  wrongAction,
} from "../../components/modals/modals";
import { loginActionCreator } from "../features/userSlice";

export const registerThunk = (userData) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_URL}users/register`, userData);
  registered();
};

export const loginThunk = (userData) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(
      `${process.env.REACT_APP_API_URL}users/login`,
      userData
    );

    if (status === 200) {
      loggedIn();
      const { id, username } = jwtDecode(data.token);
      localStorage.setItem("token", data.token);

      dispatch(loginActionCreator({ id, username }));
    }
  } catch (error) {
    wrongAction("Incorrect username or password. Please retry!");
  }
};
