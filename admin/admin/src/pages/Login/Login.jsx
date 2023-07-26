import React from 'react';
import { useState } from 'react';
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }, dispatch);
      console.log(response); // Log the response to see its content
      if (response && response.success){
        navigate('/');
      }
    } catch (error) {
      // Handle login error if needed
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <form className='loginForm'>
        <input type="text" placeholder='email' className='loginInput' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' className='loginInput' onChange={(e) => setPassword(e.target.value)} />
        <button className="loginButton" onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login;
