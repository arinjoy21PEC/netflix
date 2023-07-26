import React from 'react'
import "./login.css"
import { useState } from 'react';
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from 'react';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/api/auth/login", { username, password });
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
