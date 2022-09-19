import { Avatar, Box, Grid, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import abc from "../assets/images/abc.jpg";

function OurStory() {
  return (
    <Box sx={{ my: 10 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={5}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" src={abc} sx={{ width: 400, height: 400 }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Box>
            <Box sx={{ py: 2 }}>
              <Typography color="#66D643" sx={{ fontWeight: "bold" }}>
                Our Story
              </Typography>
            </Box>
            <Box sx={{ py: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                A Farm Like No Other
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
              <Box sx={{ pr: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <DoneIcon />
                </Avatar>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  color="#B8D4B0"
                  sx={{ py: 1, fontWeight: "bold" }}
                >
                  100% Home Grown Products
                </Typography>
                <Typography>
                  Our Products are fully grown in Ethiopia and handled with
                  local workers.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
              <Box sx={{ pr: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <DoneIcon />
                </Avatar>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  color="#66D643"
                  sx={{ py: 1, fontWeight: "bold" }}
                >
                  100% Home Grown Products
                </Typography>
                <Typography>
                  Our Products are fully grown in Ethiopia and handled with
                  local workers.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurStory;
