import { toast } from "react-toastify";

let idLoadingModal = import("react-toastify").Id;

export const correctAction = (message) => toast.success(message);

export const wrongAction = (message) => toast.error(message);

export const setLoadingOn = (message) => {
  idLoadingModal = toast.loading(message);
};
export const setLoadingOff = () => toast.dismiss(idLoadingModal);

export const registered = () =>
  toast.success("Great! Account created!", {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

export const loggedIn = () =>
  toast.success("Great! You are logged in!", {
    position: toast.POSITION.TOP_CENTER,
  });
