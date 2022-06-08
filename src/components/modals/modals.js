import { toast } from "react-toastify";

let idLoadingModal = import("react-toastify").Id;

export const correctAction = (message) => toast.success(message);
export const wrongAction = (message) => toast.error(message);
export const setLoadingOn = (message) => {
  idLoadingModal = toast.loading(message);
};
export const setLoadingOff = () => toast.dismiss(idLoadingModal);
