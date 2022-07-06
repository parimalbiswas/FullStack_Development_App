// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from "./components/Home";
import Login from './components/Login';
import Navbar from "./components/Navbar";
import Signup from './components/Signup';

function App() {
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Error />} />
      </Routes>



    </div>
  );
}

export default App;
