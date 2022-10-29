import { Box, Button, Grid, Typography } from "@mui/material";
import abc from "../assets/images/abc.jpg";

function Service() {
  return (
    <Box sx={{ my: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {xs: "center", md:"flex-end"},
              pr: {xs: 0, md: 5},
            }}
          >
            <Box
              sx={{
                width: {xs: 280,sm: 380, md: 450},
                height: {xs: 280,sm: 380, md: 450},
                border: "10px solid black",
              }}
            >
              <Box
                component="img"
                src={abc}
                sx={{
                  width: {xs: 280,sm: 380, md: 450},
                  height: {xs: 280,sm: 380, md: 450},
                  position: "relative",
                  top: 15,
                  right: 35,
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ pr: {xs:3, md:20}, pl: {xs: 3, md: 0}, py: {xs:2, md:0} }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", display: {xs: "none", sm: "block"} }}>
              Hard Workers Producing Healthy & Tasty Food
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold",display: {xs: "block", sm: "none"} }}>
              Hard Workers Producing Healthy & Tasty Food
            </Typography>
            <Typography variant="h6">
              The Farm business is to produce and provide quality vegetable and
              fruit crops to the market. The Farm is accessible all year round
              through all-weather road. Its products will fetch adequate market
              in nearby towns such as Arba minch, Sodo, Awassa, Shash
            </Typography>
            <Box sx={{ pt: 3, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#FF9100", color: "white", borderRadius: 20 }}
              >
                Our Services
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Service;
