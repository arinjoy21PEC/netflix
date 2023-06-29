import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/Featured/Featured";
import "./Home.scss";
import List from "../../Components/List/LIst";
import axios from "axios"
import { useEffect, useState } from "react";

const Home = ({type}) => {
  const[lists, setLists] = useState([]);
  const[genre, setGenre] = useState(null);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
  })

  useEffect(()=>{
    const getRandomLists = async () =>{
      try{
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type:"" }${genre ? "&genre=" + genre:"" }`,
          {
            headers:{
              token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            }
          }
        );
        //console.log(res);
        setLists(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getRandomLists();
  },[type, genre])
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre}/>
      {lists.map((list,index) => (
        <List key={`${index}`}list={list} />  
      ))}
    </div>
  );
};

export default Home;
