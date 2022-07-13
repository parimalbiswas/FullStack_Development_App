// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blog/Blogs';
import Header from "./components/Header";
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import BlogDetail from './components/Blog/BlogDetail';

function App() {
  return (
    <div>
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/add' element={<AddBlog />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<BlogDetail />} exact />


          </Routes>
        </main>

      </React.Fragment>


    </div>
  );
}

export default App;


// 2: 05
