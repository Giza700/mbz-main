import { Box, Grid, Typography } from "@mui/material";
import Bananas from "../assets/images/bananas.jfif";

function Provide() {
  return (
    <Box sx={{ bgcolor: "#E0F5F5", p: {xs: 3, sm:10} }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Services We provide
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Benefits Health
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "block", md: "flex" }, Pt: 3 }}>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', px: {xs:0, sm:5}, py:{xs: 3,py:0}}}>
            <Box
              component="img"
              src={Bananas}
              sx={{ width: 300, height: 300 }}
            />
            <Typography>Fruits Loads of Potassium</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', px: {xs:0, sm:5}, py:{xs: 3,py:0}}}>
            <Box
              component="img"
              src={Bananas}
              sx={{ width: 300, height: 300 }}
            />
            <Typography>Fruits Loads of Potassium</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', px: {xs:0, sm:5}, py:{xs: 3,py:0}}}>
            <Box
              component="img"
              src={Bananas}
              sx={{ width: 300, height: 300 }}
            />
            <Typography>Fruits Loads of Potassium</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Provide;
