import React from 'react'
import style from "./Error.module.css";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <h1>

                <div className="container mt-3">

                    <div className={style.middle}>
                        <div className="spinner-grow text-muted"></div>
                        <div className="spinner-grow text-primary"></div>
                        <div className="spinner-grow text-success"></div>
                        <div className="spinner-grow text-info"></div>
                        <div className="spinner-grow text-warning"></div>
                        <div className="spinner-grow text-danger"></div>
                        <div className="spinner-grow text-secondary"></div>
                        <div className="spinner-grow text-dark"></div>
                        <div className="spinner-grow text-light"></div>
                    </div>
                    <h1></h1>

                    <div class="alert alert-danger">
                        <strong>Not found !</strong> We are Sorry Page Not exist
                    </div>


                    <NavLink to="/"><button type="button" class="btn btn-success">Click Here to Back to Home Page</button></NavLink>


                </div>

            </h1>
        </>
    )
}

export default Error