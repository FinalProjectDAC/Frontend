import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes , Route, BrowserRouter } from "react-router-dom"
import Login2 from './components/Login2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      
      <Route path='/login' element={<Login2/>}></Route>
      
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

