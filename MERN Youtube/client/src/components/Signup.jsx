import React, { useState } from 'react';
import style from "./Signup.module.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });

  let field, enterInput;
  const handleInputs = (e) => {
    console.log(e);
    field = e.target.id;
    enterInput = e.target.value;

    setUser({ ...user, [field]: enterInput })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, work, password, cpassword })
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert(" Registration Successful");
      console.log(" Registration Successful");
      // history.push("/signin");
      navigate("/login");
    }

  }



  return (
    <div className={style.main_div}>
      <form method='POST' >

        <div className={style.container}>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="name"><b>Name</b></label>
          <input type="text" placeholder="name" name="name" id="name" required value={user.name} onChange={handleInputs} />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required value={user.email} onChange={handleInputs} />

          <label htmlFor="phone"><b>phone</b></label>
          <input type="text" placeholder="Enter phone" name="phone" id="phone" required value={user.phone} onChange={handleInputs} />

          <label htmlFor="work"><b>work</b></label>
          <input type="text" placeholder="Enter work" name="work" id="work" required value={user.work} onChange={handleInputs} />



          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="password" required value={user.password} onChange={handleInputs} />

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="cpassword" id="cpassword" required value={user.cpassword} onChange={handleInputs} />
          <hr />


          <button type="submit" className={style.registerbtn} onClick={postData}>Register</button>
        </div>
        <div className={`${style.container}${style.signin}`}>
          <p>Already have an account? <NavLink to="/login" className={style.signupNavLink}>Log In</NavLink></p>
        </div>

      </form>









    </div>
  )
}

export default Signup