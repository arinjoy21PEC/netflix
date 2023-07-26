import React from 'react'
import "./login.css"
import { useState } from 'react';
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
  })
  
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      navigate("/")
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError("Something went wrong!");
      }
    }
  };

  return (
    <div className='login'>
        <form className='loginForm'>
            <input type="text" placeholder='email' className='loginInput' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='password' className='loginInput' onChange={(e) => setPassword(e.target.value)}/>
            <button className="loginButton" onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login
