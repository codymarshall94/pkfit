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
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { useAuth } from "../../context/AuthContext";

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
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { currentUser } = useAuth();

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

  const handleClickLink = (page) => {
    setActivePage(page);
    handleCloseNavMenu();
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
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="xl" position="relative">
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
                src={require("../../images/logo/logo-no-background-color.png")}
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
                  src={require("../../images/logo/logo-no-background-color.png")}
                  alt="logo"
                  style={{ width: "6rem" }}
                />
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.link}
                onClick={() => handleClickLink(page.name)}
                style={{
                  textDecoration: "none",
                  color:
                    activePage === page.name
                      ? colors.primary[900]
                      : colors.primary[300],
                  fontWeight: "600",
                  margin: "0 1rem",
                  fontSize: "1.2rem",
                }}
              >
                {page.name}
              </Link>
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
          {!currentUser ? (
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
                alt={currentUser.email}
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
              <Link
                key={page.name}
                to={page.link}
                onClick={handleCloseNavMenu}
                style={{
                  textDecoration: "none",
                  color: colors.primary[100],
                  fontWeight: "600",
                  display: "block",
                  padding: "1rem",
                }}
              >
                {page.name}
              </Link>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
