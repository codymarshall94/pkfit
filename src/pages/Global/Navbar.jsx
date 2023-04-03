import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Container,
  Box,
  useTheme,
} from "@mui/material";
import "../../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Person2Icon from "@mui/icons-material/Person2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import NavbarLogo from "../../images/logo/navbarlogo-red.png";
import "../../styles/Navbar.css";

const pages = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "/skills" },
  { name: "Plans", link: "/plans" },
  { name: "Articles", link: "/articles"},
  { name: "Generator", link: "/generator" },
];
const settings = ["Saved Workouts", "Logout"];

const SignUpButton = () => {
  const navigate = useNavigate();

  return (
    <Link
      to="/register"
      className="signup-btn"
      onClick={() => navigate("/signup")}
    >
      Sign Up
    </Link>
  );
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [activePage, setActivePage] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const { currentUser, signOutUser } = useAuth();

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
        signOutUser();
        break;
      case "Saved Workouts":
        navigate("/saved-workouts");
        break;
      default:
        break;
    }
    handleCloseUserMenu();
  };

  const handleClickLink = (page) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      role="navigation"
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.black,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="100%">
        <Toolbar disablegutter="true" sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => setActivePage("Home")}
            >
              <Box
                component="img"
                src={NavbarLogo}
                alt="logo"
                sx={{ width: "6rem" }}
              />
            </Link>
          </Box>

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
              <Box
                component="img"
                src={NavbarLogo}
                alt="logo"
                sx={{ width: "6rem" }}
              />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.link}
                className="nav-link"
                onClick={() => handleClickLink(page.name)}
                style={{
                  textDecoration: "none",
                  color:
                    activePage === page.name
                      ? theme.palette.red.main
                      : theme.palette.text.secondary,
                  fontWeight: "600",
                  margin: "0 1rem",
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
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
                  onClick={() => setActivePage("Login")}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.secondary,
                    fontWeight: "600",
                    margin: "0 .5rem",
                  }}
                >
                  Login
                </Link>

                <SignUpButton />
              </>
            ) : (
              <Tooltip title="Open settings">
                <Avatar
                  sx={{
                    backgroundColor: theme.palette.red.main,
                    cursor: "pointer",
                  }}
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
              color="inherit"
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
                  className="nav-link"
                  onClick={handleCloseNavMenu}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                    fontWeight: "600",
                    display: "block",
                    padding: "1rem",
                  }}
                >
                  {page.name}
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
