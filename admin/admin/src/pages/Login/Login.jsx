import React from 'react';
import { useState } from 'react';
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const history = useHistory(); // Get the history object from useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }, dispatch);
      if (response.success) {
        // If login is successful, navigate to a different page
        history.push('/'); // Replace 'dashboard' with the desired page URL
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
