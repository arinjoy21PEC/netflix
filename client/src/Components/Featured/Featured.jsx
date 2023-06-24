import { InfoOutlined, InfoRounded, PermDeviceInformationOutlined, PlayArrowOutlined } from "@mui/icons-material";
import "./Featured.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Featured({ type,setGenre }) {
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    const getMovie = async () =>{
      try{
        const res = await axios.get(`/movies/random?type=${type}`,          
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzU4NzQ0MywiZXhwIjoxNjg4MDE5NDQzfQ.53hD--zM0-1PsjFNZuy9kE1rCosANak4mvVODqsLx9M"
          }
        });
        setMovie(res.data[0]);
      }catch(err){
        console.log(err);
      }
    };
    getMovie();
  },[type]);
  console.log(movie)
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={movie.img}
        alt=""
      />
      <div className="info">
        <img
          src={movie.imgTitle}
          alt=""
        />
        <span className="desc">
          {movie.desc}
        </span>
        <div className="buttons">
          <Link to="/watch" state={{movie: movie}} className="link">
          <button className="play">
            <PlayArrowOutlined />
            <span>Play</span>
          </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
