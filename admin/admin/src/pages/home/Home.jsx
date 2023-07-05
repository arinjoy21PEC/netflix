import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getStats = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || !user.accessToken) {
          // Handle missing or expired token, redirect to login page
          navigate("/login");
          return;
        }

        const res = await axiosInstance.get("/users/stats", {
          headers: {
            token: "Bearer " + user.accessToken,
          },
        });

        if (res.data.error === "Token expired") {
          // Handle token expiration, redirect to login page
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };

    getStats();
  }, [MONTHS, axiosInstance, navigate]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
