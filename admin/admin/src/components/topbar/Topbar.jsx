import React from "react";
import "./topbar.css";
import { LanguageOutlined, NotificationsNoneOutlined, SettingsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import {logout} from "../../context/authContext/AuthActions";
import { useContext } from "react";

export default function Topbar() {
  const {dispatch} = useContext(AuthContext)
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft"> 
          <span className="logo">AdminPannel</span>
            <button onClick={() => dispatch(logout())}>
              <span>
                LogOut
              </span>
            </button>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsOutlined />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
