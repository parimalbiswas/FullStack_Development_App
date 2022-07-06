import React, { useState } from 'react';
import style from "./Login.module.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credintials");
    }
    else {
      window.alert("Login Succesfull");
      navigate("/");
    }

  }

  return (
    <div className={style.main_div}>

      <form method='POST'>

        <div className={style.container}>
          <h1>Log In</h1>
          <p>Please put the correct details to log In.</p>
          <hr />


          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />



          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />


          <hr />


          <button type="submit" className={style.registerbtn} onClick={logInUser}>Log In</button>
        </div>
        <div className={`${style.container}${style.signin}`}>
          <p>Dont have an account? Create Now . <NavLink to="/signup" className={style.signupNavLink}>Create Account</NavLink></p>
        </div>

      </form>





    </div>
  )
}

export default Login