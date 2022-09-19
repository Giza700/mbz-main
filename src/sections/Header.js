import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import HeaderImage from "../components/HeaderImage";
import headerimage from "../assets/images/headerimage.jfif";

function Header({ activeTab }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${headerimage})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar activeTab={activeTab} />
      <HeaderImage />
    </Box>
  );
}

export default Header;
