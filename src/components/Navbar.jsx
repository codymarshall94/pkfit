import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Person2Icon from "@mui/icons-material/Person2";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

const pages = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "/skills" },
  { name: "Generator", link: "/generator" },
];
const settings = ["Saved Workouts", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [activePage, setActivePage] = useState("");
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuClick = (setting) => {
    switch (setting) {
      case "Logout":
        logout();
        break;
      case "Saved Workouts":
        navigate("/saved-workouts");
        break;
      default:
        break;
    }
    handleCloseUserMenu();
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppBar
      role="navigation"
      position="fixed"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "3rem",
        maxHeight: "3rem",
        backgroundColor: colors.backgroundWhite[500],
        boxShadow: "none",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => setActivePage("Home")}
            >
              <img
                src={require("../images/logo/logo-no-background-color.png")}
                alt="logo"
                style={{ width: "6rem" }}
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Box
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
              }}
            >
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={() => setActivePage("Home")}
              >
                <img
                  src={require("../images/logo/logo-no-background-color.png")}
                  alt="logo"
                  style={{ width: "6rem" }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page.name} onClick={handleCloseNavMenu}>
                <Link
                  to={page.link}
                  onClick={() => setActivePage(page.name)}
                  className={
                    activePage === page.name ? "active-link" : "nav-link"
                  }
                  style={{ textDecoration: "none", color: colors.primary[300], fontWeight: "600"}}
                >
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end" }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-mobile"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleUserMenuClick(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {!user ? (
            <>
              <Link
                to="/login"
                className="nav-link"
                onClick={() => setActivePage("Login")}
              >
                Login
              </Link>
              <Button variant="contained" color="primary">
                <Link
                  to="/register"
                  onClick={() => setActivePage("Sign Up")}
                  className="sign-up-btn"
                >
                  Sign Up
                </Link>
              </Button>
            </>
          ) : (
            <Tooltip title="Open settings">
              <Avatar
                sx={{ backgroundColor: "primary.main", cursor: "pointer" }}
                alt={user.email}
                onClick={handleOpenUserMenu}
              >
                <Person2Icon />
              </Avatar>
            </Tooltip>
          )}

          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
            backgroundColor="#000"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link
                  to={page.link}
                  style={{ textDecoration: "none", color: colors.primary[100], fontWeight: "600" }}
                >
                  {page.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
