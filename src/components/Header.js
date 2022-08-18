import React from 'react';
import '../css/header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <Link to="/" style={{ textDecoration: 'none' }}><h4 className='header-logo'>pkFit</h4></Link>
        <Link to="/generator" style={{ textDecoration: 'none' }}><span className='header-link'>Generate</span></Link>
    </div>
  )
}

export default Header