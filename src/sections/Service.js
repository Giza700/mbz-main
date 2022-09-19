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
              justifyContent: "flex-end",
              pr: 5,
            }}
          >
            <Box
              sx={{
                width: 450,
                height: 450,
                border: "10px solid black",
              }}
            >
              <Box
                component="img"
                src={abc}
                sx={{
                  width: 450,
                  height: 450,
                  position: "relative",
                  top: 15,
                  right: 35,
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ pr: 20 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
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
