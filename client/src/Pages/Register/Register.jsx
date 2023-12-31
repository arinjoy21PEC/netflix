import { useRef } from "react";
import { useState } from "react";
import "./Register.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import antflixLogo from "./antflix.png"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Use the correct variable name

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
  })


  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);

    try {
      await axiosInstance.post("/auth/register", { email, username, password });
      navigate("/login", { replace: true }); 
    } catch (err) {}
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={antflixLogo}
            alt=""
          />
            {/* <button  className="loginButton" 
              onClick={() => console.log("Login button clicked!")}>
              LogIn
            </button> */}
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
        <Link to="/login" className="loginlink">
            <button  className="loginButton">
              LogIn
            </button>
        </Link>
      </div>
    </div>
  );
}
