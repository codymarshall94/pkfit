import React from "react";
import Header from "./components/Header";
import Box from "@mui/system/Box";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{bgcolor: '#F3F3F4', height: '50px'}}></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <h1 className="home-title">Parkour Workout Generator</h1>
        <h3>Quick workouts for at Home or at the Gym</h3>
      </Box>
      <Box className="home-image-container" >
        <img className="home-image" src={require('./images/homePageImage.jpg')} alt="" />
      </Box>
      <Link to="/generator" className="home-button" style={{ textDecoration: 'none' }}>Generate Now</Link>
    </div>
  );
}

export default App;
