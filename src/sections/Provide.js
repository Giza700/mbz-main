import { Box, Grid, Typography } from "@mui/material";
import Bananas from "../assets/images/bananas.jfif";

function Provide() {
  return (
    <Box sx={{ bgcolor: "#E0F5F5", p: 10 }}>
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
          <Box>
            <Box
              component="img"
              src={Bananas}
              sx={{ width: 300, height: 300 }}
            />
            <Typography>Fruits Loads of Potassium</Typography>
          </Box>
          <Box>
            <Box
              component="img"
              src={Bananas}
              sx={{ width: 300, height: 300 }}
            />
            <Typography>Fruits Loads of Potassium</Typography>
          </Box>
          <Box>
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
