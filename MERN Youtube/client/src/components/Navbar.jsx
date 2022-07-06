import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import logo from "../img/x.png"


const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" >
                    <img src={logo} alt="" />
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" >Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" >about</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" >contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login" >login</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">signup</NavLink>
                            </li>

                        

                        </ul>

                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar