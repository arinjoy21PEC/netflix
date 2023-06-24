import { VisibilityOutlined } from "@mui/icons-material";
import "./widgetSm.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm(){
  const [newUsers, setNewUsers]=useState([])
  useEffect(()=>{
    const getNewUsers = async ()=>{
      try {
        const res = await axios.get("http://localhost:8800/api/users?new=true",
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VlYTg5ZjFiMTgwMGM0ZjkwNWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzU4NzQ0MywiZXhwIjoxNjg4MDE5NDQzfQ.53hD--zM0-1PsjFNZuy9kE1rCosANak4mvVODqsLx9M"
          },
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