import React from 'react';
import '../css/header.css';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box className='header'>
        <Link to="/" style={{ textDecoration: 'none' }}><h4 className='header-logo'>pkFit</h4></Link>
        <Link to="/generator" style={{ textDecoration: 'none' }}><span className='header-link'>Generate</span></Link>
        <Link to="/skills" style={{ textDecoration: 'none' }}><span className='header-link'>Skills</span></Link>
    </Box>
  )
}

export default Header