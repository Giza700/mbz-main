import { Box, Grid, Typography } from "@mui/material";
import Bananas from "../assets/images/bananas.jfif";

function Team() {
  return (
    <Box sx={{ bgcolor: "#D6F2F2" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 10,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Get to Know Our
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Team
        </Typography>
        <Box sx={{ pt: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Box
                component="img"
                src={Bananas}
                sx={{ width: 200, height: 250 }}
              />
              <Typography>Owner</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Box
                component="img"
                src={Bananas}
                sx={{ width: 200, height: 250 }}
              />
              <Typography>Owner</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Box
                component="img"
                src={Bananas}
                sx={{ width: 200, height: 250 }}
              />
              <Typography>Owner</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Box
                component="img"
                src={Bananas}
                sx={{ width: 200, height: 250 }}
              />
              <Typography>Owner</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Team;
