import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const navs = ["Home", "About", "Services", "Gallery", "ContactUs"];

function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const activeTab = props.activeTab;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box position="static" sx={{ background: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mx: 4 }}>
            <Typography variant="h3" color="white">
              Logo
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "flex-end" },
            }}
          >
            <IconButton onClick={handleOpenNavMenu}>
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
              {navs.map((nav) => (
                <MenuItem
                  key={nav}
                  onClick={handleCloseNavMenu}
                  sx={{
                    bgcolor: activeTab === nav ? "#FF9100" : "",
                    "&:hover": {
                      bgcolor: "orange",
                    },
                  }}
                >
                  <Link to={`/${nav}`} style={{ textDecoration: "none" }}>
                    <Typography
                      variant="subtitle 2"
                      component="div"
                      textAlign="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {nav}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {navs.map((nav) => (
              <Box
                key={nav}
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  px: 3,
                  bgcolor: activeTab === nav ? "#FF9100" : "",
                  "&:hover": {
                    bgcolor: "yellow",
                  },
                  cursor: "pointer",
                  borderRadius: 3,
                }}
              >
                <Link to={`/${nav}`} style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign="center"
                    color="white"
                  >
                    {nav}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default NavBar;
