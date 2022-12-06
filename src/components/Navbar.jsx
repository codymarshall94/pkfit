import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Navbar() {
  const user = useSelector((state) => state.user.user);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className="header-logo">pkFit</h4>
      </Link>
      <Box>
        <Link
          to="/skills"
          style={{ textDecoration: "none" }}
          className="header-links"
        >
          <span className="header-link">Skills</span>
        </Link>
        <Link
          to="/generator"
          style={{ textDecoration: "none" }}
          className="header-links"
        >
          <span className="header-link">Generate</span>
        </Link>
        <Link
          to="/register"
          style={{ textDecoration: "none" }}
          className="header-links"
        >
          <span className="header-link">Sign Up</span>
        </Link>

        {user !== null ? (
          <div className="header-links" onClick={() => logout()}>
            <span className="header-link">Logout</span>
          </div>
        ) : (
          <Link
            to="/login"
            style={{ textDecoration: "none" }}
            className="header-links"
          >
            <span className="header-link">Login</span>
          </Link>
        )}
      </Box>
    </Box>
  );
}

export default Navbar;
