import { VisibilityOutlined } from "@mui/icons-material";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export default function WidgetSm(){
  const [newUsers, setNewUsers]=useState([])
  useEffect(()=>{
    const getNewUsers = async ()=>{
      try {
        const res = await axiosInstance.get("/users?new=true",
        {
          headers:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    getNewUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
          <li key={user._id} className="widgetSmListItem">
          <img
            src={user.profilePic || "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityOutlined className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
