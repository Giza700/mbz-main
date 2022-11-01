import { Box, Grid, Typography } from "@mui/material";
import Bananas from "../assets/images/bananas.jfif";

function ProvideGallery() {
  function FruitBox() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: {xs:0, sm:5}, 
          py:{xs: 3,py:0}
        }}
      >
        <Box component="img" src={Bananas} sx={{ width: 300, height: 300 }} />
        <Typography>Fruits Loads of Potassium</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ p: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ display: { xs: "block", sm: "block", md: "flex" }, Pt: 3 }}>
          <FruitBox />
          <FruitBox />
          <FruitBox />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 4,
        }}
      >
        <Box sx={{ display: { xs: "block", sm: "block", md: "flex" }, Pt: 3 }}>
          <FruitBox />
          <FruitBox />
          <FruitBox />
        </Box>
      </Box>
    </Box>
  );
}

export default ProvideGallery;
