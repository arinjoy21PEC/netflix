import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};