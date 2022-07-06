import React, { useEffect } from 'react'
import style from "./About.module.css"
import x from "../img/x.png";
import { useNavigate } from 'react-router-dom';

const About = () => {
  
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      


    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }


  useEffect(() => {
    callAboutPage();
  }, [])

  return (
    <div>

      {/* <form method="GET"> */}
        <div className={style.card}>

          <img src={x} alt="John" style={{ width: "100%" }} />
          <h1>John Doe</h1>
          <p className={style.title}>CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div className={style.about_flex}>
            <div>
              <h5>UserID</h5>
              <h5>Name</h5>
              <h5>Email</h5>
              <h5>Phone</h5>
              <h5>Profession</h5>
            </div>
            <div style={{ color: "blue" }}>
              <h5>UserID 111111111</h5>
              <h5>Name</h5>
              <h5>Email</h5>
              <h5>Phone</h5>
              <h5>Profession</h5>
            </div>
          </div>
          <p><button className={style.button1}>Contact</button></p>

        </div>
      {/* </form> */}




    </div>
  )
}

export default About