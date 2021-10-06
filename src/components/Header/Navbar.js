import React from 'react'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import './Navbar.style.css'

 const Navbar = () => {


    return (
        <nav>
              
           <div className="logo">
               <i className="fas fa-bolt"></i>
               <a href="www.google.com"> Dewan</a>
            </div>
            <div className="nav-Link">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/faq">Faq</Link>
                  <Link to="/ourteam">Ourteam</Link>
                  <Link to="/contact">Contact</Link>
            </div>
       
        </nav>
    );
}

export default Navbar;