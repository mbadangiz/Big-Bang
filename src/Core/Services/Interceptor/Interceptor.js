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
  ErrorToastify(err.message);

  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.status);
  }
  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  if (token) opt.headers.Authorization = `Bearer ${token}`;
  return opt;
});

export default instance;

// use instance instead of axios
