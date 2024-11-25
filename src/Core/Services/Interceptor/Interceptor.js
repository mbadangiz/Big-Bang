import axios from "axios";
import { getItem } from "../common/storage.services";
import { ErrorToastify } from "../../Utils/Toastifies/ErrorToastify.Utils";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  ErrorToastify("برای دسترسی به منابع و امکانات سایت ابتدا وارد شوید.");

  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.status);
  }
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const shabiToken = getItem("userList");
  if (shabiToken) {
    const myLastTokenArray = JSON.parse(shabiToken);
    const filtered = myLastTokenArray.filter(
      (item) => item.isActiveUser === true
    );
    const myToken = filtered[0].token;
    opt.headers.Authorization = `Bearer ${myToken}`;
  }

  return opt;
});

export default instance;

// use instance instead of axios
