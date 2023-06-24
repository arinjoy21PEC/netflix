import "./ListItem.scss";
import {
  ThumbUpAltOutlined,
  PlayArrowOutlined,
  ThumbDownAltOutlined,
  AddOutlined,
} from "@mui/icons-material";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index,item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
  })


  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axiosInstance.get("/api/movies/find/"+item, {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzU4NzQ0MywiZXhwIjoxNjg4MDE5NDQzfQ.53hD--zM0-1PsjFNZuy9kE1rCosANak4mvVODqsLx9M"
          }
        });
        setMovie(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getMovie()
  }, [item]);
 
  return (
    <Link to="/watch" state={{movie:movie }} >
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <img
        src={movie.img}
        alt=""
        />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowOutlined className="icon" />
              <AddOutlined className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  </Link>
  );
}
