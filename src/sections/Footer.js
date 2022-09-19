import { Box, Grid, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <Box sx={{ mt: 10, mb: 5 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} sx={{ pl: 20 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", py: 2 }}>
              Messay Bezabih Agro-Business
            </Typography>
            <Typography>
              Messay Bezabih Agro Business is an agribusiness focused on the
              profitable, progressive, and sustainable production of premium
              quality identity-preserved grains, oilseeds, fruits and
              vegetables.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ pl: 20 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", py: 2 }}>
              Services
            </Typography>
            <Typography sx={{ py: 1 }}>Fruits</Typography>
            <Typography sx={{ py: 1 }}>Vegetables</Typography>
            <Typography sx={{ py: 1 }}>Oil Seeds</Typography>
            <Typography sx={{ py: 1 }}>Grains</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ pl: 10 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", py: 2 }}>
              Contact
            </Typography>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
                <Box>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography>
                    SNNPRS Region, Gamo Gofa Zone ,Uba dedretsehay Woreda,
                    Kencho Kebele
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
                <Box>
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography>Email</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
                <Box>
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography>+251-930-105-250</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
