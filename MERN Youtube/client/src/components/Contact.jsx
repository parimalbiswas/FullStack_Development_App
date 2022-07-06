import React from 'react'
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={style.flex}>
        <div class="container p-5 my-5 border">
          <h1>PHone</h1>
          <p>This container has a border and some extra padding and margins.</p>
        </div>

        <div class="container p-5 my-5 bg-dark text-white">
          <h1>Email</h1>
          <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
        </div>

        <div class="container p-5 my-5 bg-primary text-white">
          <h1>Address</h1>
          <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
        </div>
      </div>





      <div class="container mt-3" >
        <h2>Get In Touch</h2>
        {/* <p>If you want your form elements to appear side by side, use .row and .col:</p> */}
        <form className={style.bottom}>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Enter email" name="email" />
            </div>
            <div class="col">
              <input type="password" class="form-control" placeholder="Enter password" name="pswd" />
            </div>
            <div class="col">
              <input type="password" class="form-control" placeholder="Enter password" name="pswd" />
            </div>
          </div>
          <div class="mb-3 mt-3">
            <label for="comment">Comments:</label>
            <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>


    </>



  )
}

export default Contact