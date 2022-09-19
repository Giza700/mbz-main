import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Testimonials() {
  return (
    <Box sx={{ my: 10, px: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Box>
            <Typography
              variant="h6"
              color="#6CD74A"
              sx={{ fontWeight: "bold" }}
            >
              Testimonials
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              What They Say About Us
            </Typography>
            <Box sx={{ pt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ pr: 5 }}>
                  <ArrowBackIosIcon />
                </Box>
                <Box>
                  <ArrowForwardIosIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card
            sx={{
              bgcolor: "#E0F5F5",
              px: 3,
              py: 5,
              width: 250,
              height: 280,
              borderRadius: 10,
            }}
          >
            <Typography>
              Authentic review of the farm. Its good to have someone from the
              country and outside if available.
            </Typography>
            <Box sx={{ display: "flex", alighItems: "center", pt: 3 }}>
              <Box sx={{ pr: 5 }}>
                <Avatar src={""} alt="A" sx={{ width: 60, height: 60 }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Asmare
                </Typography>
                <Typography variant="body2">Local Shopper</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card
            sx={{
              bgcolor: "#E0F5F5",
              px: 3,
              py: 5,
              width: 250,
              height: 280,
              borderRadius: 10,
            }}
          >
            <Typography>
              Authentic review of the farm. Its good to have someone from the
              country and outside if available.
            </Typography>
            <Box sx={{ display: "flex", alighItems: "center", pt: 3 }}>
              <Box sx={{ pr: 5 }}>
                <Avatar src={""} alt="A" sx={{ width: 60, height: 60 }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Asmare
                </Typography>
                <Typography variant="body2">Local Shopper</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonials;
