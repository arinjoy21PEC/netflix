import axios from "axios";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axiosInstance.get("/movies", {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU3NTY5MCwiZXhwIjoxNjg5MDA3NjkwfQ.VFRANBFh3D9oZhwOkbb3ZsUDMckmuPvwu317cSSfyns"
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axiosInstance.post("/movies", movie, {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU3NTY5MCwiZXhwIjoxNjg5MDA3NjkwfQ.VFRANBFh3D9oZhwOkbb3ZsUDMckmuPvwu317cSSfyns"
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axiosInstance.delete("/movies/" + id, {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODU3NTY5MCwiZXhwIjoxNjg5MDA3NjkwfQ.VFRANBFh3D9oZhwOkbb3ZsUDMckmuPvwu317cSSfyns"
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
