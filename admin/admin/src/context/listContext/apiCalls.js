import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
})


export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axiosInstance.get("/lists", {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU3NTY5MCwiZXhwIjoxNjg5MDA3NjkwfQ.VFRANBFh3D9oZhwOkbb3ZsUDMckmuPvwu317cSSfyns"
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axiosInstance.post("/lists", list, {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU3NTY5MCwiZXhwIjoxNjg5MDA3NjkwfQ.VFRANBFh3D9oZhwOkbb3ZsUDMckmuPvwu317cSSfyns"
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axiosInstance.delete("/lists/" + id, {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU3NTY5MCwiZXhwIjoxNjg5MDA3NjkwfQ.VFRANBFh3D9oZhwOkbb3ZsUDMckmuPvwu317cSSfyns"
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
