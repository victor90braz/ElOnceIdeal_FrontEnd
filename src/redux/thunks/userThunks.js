import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { loginActionCreator } from "../features/userSlice";

const registerred = () =>
  toast.success("Great! Account created!", {
    position: toast.POSITION.TOP_CENTER,
  });

const errorModal = (error) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const loggedIn = () =>
  toast.success("Great! You are logged in!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const registerThunk = (userData) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_API_URL}users/register`, userData);
  registerred();
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
    errorModal("Ops!! tiene un errorrr");
  }
};
