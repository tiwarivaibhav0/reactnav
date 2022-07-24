import * as React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import "./App.css";
import { Link } from "react-router-dom";

// const pages = ["Home", "My Blogs", "SignOut"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static" sx={{ background: "#2E3B55" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png"
            alt=""
            height="50px"
            width="10%"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {/* {pages.map((page) => ( */}
              <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/">Home</Link>
                </Typography>
              </MenuItem>
              <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/myBlogs">My Blogs</Link>
                </Typography>
              </MenuItem>
              <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/signout">Sign Out</Link>
                </Typography>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={Math.random()}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              key={Math.random()}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/myBlogs">My Blogs</Link>
            </Button>
            <Button
              key={Math.random()}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/signout">Sign Out</Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                Vaibhav Tiwari
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
