import { ArrowDropDownOutlined, NotificationsActiveOutlined, SearchOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useContext } from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
import {AuthContext} from "../../authContext/AuthContext";
import {logout} from "../../authContext/AuthActions";
import antflixLogo from "./antflix.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch} = useContext(AuthContext)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={antflixLogo}
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainlinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainlinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchOutlined className="icon" />
          <span>KID</span>
          <NotificationsActiveOutlined className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownOutlined className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
