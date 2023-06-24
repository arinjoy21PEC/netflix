import { ArrowBackIosOutlined } from '@mui/icons-material';
import "./Watch.scss";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const movie = location.state ? location.state.movie : null;
  

  return (
    <div className="watch">
      <Link to="/">
       <div className="back">
         <ArrowBackIosOutlined />
         Home
       </div>
      </Link>
      {movie && movie.video && (
        <video className="video" autoPlay controls src={movie.video} />
      )}
    </div>
  );
}
