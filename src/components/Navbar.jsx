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
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import "../css/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "/skills" },
  { name: "Generator", link: "/generator" },
];
const settings = ["Profile", "Settings", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

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
    if (setting === "Logout") {
      logout();
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
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            pkFit
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                alignSelf: "center",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              pkFit
            </Typography>
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center"}}>
              {!user ? (
                <>
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white", padding: "0 1rem" }}
                  >
                    Login
                  </Link>
                </>
              ) : (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Cody Marshall"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              )}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
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
                  <MenuItem key={setting} onClick={() => handleUserMenuClick(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <IconButton
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.link} style={{ textDecoration: "none" }}>
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={page.link}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {page.name}
                </Link>
              </Button>
            ))}
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
