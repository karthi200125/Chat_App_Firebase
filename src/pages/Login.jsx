import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">

      <div className="formWrapper login-box">
        <div className="logo">        
        <span className="title">Login</span>
        </div>        
      <form onSubmit={handleSubmit}>
        <div class="user-box"><input type="email" required/>
           <label>Email</label>
        </div>          
    <div class="user-box">
      <input type="password" required/>
      <label>Password</label>
    </div>          
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button>Sign in</button>
    </a>        
          {err && <span>Something went wrong</span>}
        </form>
        
        <p>You don't have an account? <Link to="/register"><span>Register</span></Link></p>
      </div>
    </div>
  );
};

export default Login;
